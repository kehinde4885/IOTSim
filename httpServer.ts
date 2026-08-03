//Express HTTP SERVER
import express from "express";
import cors from "cors";
import entityOptionsRouter from "./routes/entityOptionsRoute.ts"

import {simEngine} from "./Simulator/simulator.ts";


const app = express();

//Express middleware
app.use(express.json());
app.use(cors());


app.use(entityOptionsRouter)

app.get("/" , (req, res)=>{
    console.log(req.body)
    res.send("HTTP Server working OK")
})

app.get("/getEntities", (req,res)=>{

    const engine = simEngine.getInstance()

    const entityInfoArray = engine.printEntities()

    console.log(typeof entityInfoArray)

    res.json(entityInfoArray)
})


app.post("/createEntity", (req,res)=>{
    
    try{
        const data = req.body
        
        if(!data || typeof data !== 'object'){
            return res.status(400).json({error: "Invalid request body"})
        }
        
        const engine = simEngine.getInstance()
        
        const entity = engine.createEntity(data)
        
        console.log("json to send back", entity)
        
        res.status(201).json(entity)
        
        
    }catch (error){
        console.error('Failed to create Entity',error)
        res.status(500).json({error: 'Failed to create entity'})
    }
})


app.delete("/delete/:id", (req,res)=>{
    
    const {id} = req.params
    const engine = simEngine.getInstance()
    
    engine.deleteEntity(id)
    console.log(id)
    res.send("entity Deleted")
})

const port = 3001
app.listen(port, ()=>{
    console.log(`"Simulator http server running on port ${port}`)

})

