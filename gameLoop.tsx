import {simEngine} from "./Simulator/simulator.ts";

import {data3} from "./Simulator/EntitydataSet.ts";

function gameLoop(){

    
    
    // const ASim = new simEngine()
    //
    // ASim.createEntities(data3)
    //
    // ASim.printEntities()
    
    const engine = simEngine.getInstance()
    engine.createEntities(data3)
    
}

//Start Simulator
gameLoop()

