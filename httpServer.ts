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
    
    console.log(req)
})


const port = 3001
app.listen(port, ()=>{
    console.log(`"Simulator http server running on port ${port}`)

})

