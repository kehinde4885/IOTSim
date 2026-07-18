//SideEffects Imports-Clean Later
//import  "./Simulator/simulator.ts";

import "./gameLoop.tsx"

import {simEngine} from "./Simulator/simulator.ts";

const engine = simEngine.getInstance()

engine.printEntities()


//Express HTTP SERVER
import express from "express";
import cors from "cors";

const app = express();

//Express middleware
app.use(express.json());
app.use(cors());

app.get("/" , (req, res)=>{
   console.log(req.body)
    res.send("HTTP Server working OK")
})

app.get("/getEntities", (req,res)=>{
    
})

const port = 3001
app.listen(port, ()=>{
    console.log(`"Simulator http server running on port ${port}`)
    
})



//DENO WEBSOCKET SERVER
Deno.serve({port:80}, wssHandler)

const clients = new Set<WebSocket>()

function wssHandler(request: Request){
    //Rejects Incoming HTTP requests
    if(request.headers.get("upgrade") !== "websocket"){
        return new Response(null, {status: 426})
    }

    const {socket, response}:{socket: WebSocket ; response: Response} = Deno.upgradeWebSocket(request);

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