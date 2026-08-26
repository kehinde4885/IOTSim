Deno.serve({ port: 80 }, wssHandler)

const clients = new Set<WebSocket>()

const toJSON = {
  Name: 'popo',
  Age: 32,
}

let interval: number | undefined

function wssHandler(request: Request) {
  //Rejects Incoming HTTP requests
  if (request.headers.get('upgrade') !== 'websocket') {
    console.log('Rejected a request')
    return new Response(null, { status: 426 })
  }

  const { socket, response }: { socket: WebSocket; response: Response } =
    Deno.upgradeWebSocket(request)

  console.log('simulator Websocket server running on port 80')

  socket.addEventListener('open', () => {
    //adds to existing websockets set
    clients.add(socket)
    console.log(`a client connected (total: ${clients.size})`)
    //send a response back
    socket.send('pong')

    startBroadcastingIfNeeded()
  })

  socket.addEventListener('close', () => {
    clients.delete(socket)
    console.log(`a client disconnected (total: ${clients.size})`)
    stopBroadcastingIfNoClients()
  })

  socket.addEventListener('message', (event) => {
    if (event.data === 'Ping') {
      socket.send('Pong')
    } else {
      console.log(JSON.parse(event.data))
    }
  })

  return response
}

function broadcastAll(message: string) {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message)
    }
  })
}

function startBroadcastingIfNeeded() {
  if (interval !== undefined) return // already running

  interval = setInterval(() => {
    const payload = JSON.stringify({
      type: 'heartbeat',
      timestamp: Date.now(),
      message: 'Hello from test server',
      ...toJSON,
    })

    for (const client of clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(payload)
      }
    }

    console.log(`Broadcast sent to ${clients.size} client(s)`)
  }, 2000) // every 2 seconds
}

function stopBroadcastingIfNoClients() {
  //No Clients and No Interval Running
  if (clients.size === 0 && interval !== undefined) {
    clearInterval(interval)
    interval = undefined
    console.log('No clients connected - stopped interval')
  }
}
