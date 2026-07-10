
console.log("sms")
import "./register-all.ts"


import {data3} from "./EntitydataSet.ts";


import {entityConfig} from "./types.ts";
import {Entity} from "./Core/entity.ts";
import {entityCreatorHelper} from "./EntityCreatorHelper.ts";

//create devices

class simEngine {
    private entityMap: Map<string,Entity> = new Map();
    
    constructor(){
        
    }
    
    createEntities(data: entityConfig[]){
        
        data3.forEach((item:entityConfig) => {
        
            //returns existing entity
            if(this.entityMap.has(item.id)){
                return this.entityMap.get(item.id);
            }
        
            const  returned = entityCreatorHelper(item);
            // console.log(returned)
            this.entityMap.set(item.id, returned);
            })

    }
    
    printEntities(){
        for(const entity of this.entityMap){
            console.log(entity)
        }
    }
}

const ASim = new simEngine()

ASim.createEntities(data3)

ASim.printEntities()