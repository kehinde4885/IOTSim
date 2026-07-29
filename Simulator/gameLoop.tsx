console.log("Running Simulator Game Loop")

import {simEngine} from "./simulator.ts";

import {data3} from "./EntitydataSet.ts";

function gameLoop(){
        
    const engine = simEngine.getInstance()
    engine.createEntities(data3)
    
}

//Start Simulator
gameLoop()

