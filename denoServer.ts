Deno.serve({port:80}, wssHandler)

const clients = new Set<WebSocket>()

function wssHandler(request: Request){
    //Rejects Incoming HTTP requests
    if(request.headers.get("upgrade") !== "websocket"){
        return new Response(null, {status: 426})
    }

    const {socket, response}:{socket: WebSocket ; response: Response} = Deno.upgradeWebSocket(request);

    console.log("simulator Websocket server running on port 80")
    
    socket.addEventListener("open", ()=>{
        clients.add(socket)
        console.log(`a client connected (total: ${clients.size})`)
    })
    
    socket.addEventListener("close", ()=>{
        clients.delete(socket)
        console.log(`a client disconnected (total: ${clients.size})`)
    })

    socket.addEventListener("message", (event)=>{
        if (event.data === "ping"){
            socket.send("Pong")
        }
    })
    
    return response
}

function broadcastAll(message: string){
    clients.forEach((client)=>{
        if(client.readyState === WebSocket.OPEN){
            client.send(message)
        }
    })
}


