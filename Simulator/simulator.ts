
import {data2} from "./EntitydataSet.ts";
import {entityConfig, entityObject} from "./types.ts";
import {entityCreator} from "./EntityCreator.ts";

//create devices
// function simulationEngine


class simEngine {
    entityMap: Map<string,entityObject> = new Map();
    
    constructor(){
        
    }
    
    createEntities(data: entityConfig[]){
        
        data2.forEach((item:entityConfig) => {
        
            //returns existing entity
            if(this.entityMap.has(item.id)){
                return this.entityMap.get(item.id);
            }
        
            const  returned = entityCreator(item);
            // console.log(returned)
            this.entityMap.set(item.id, returned);
            })

    }
    
}
