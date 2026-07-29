import {data3} from "./EntitydataSet.ts";

console.log("Simulator Engine  Created")
import "./register-all.ts"



import {entityConfig} from "./types.ts";
import {Entity} from "./Core/entity.ts";
import {entityCreatorHelper} from "./EntityCreatorHelper.ts";
import {EventBus} from "./EventBus.ts";


//create devices

export class simEngine {
    //@ts-ignore
    static #instance: simEngine
    private entityMap: Map<string,Entity> = new Map();
    
    private constructor(){
        
    }
    
    public static getInstance(): simEngine {
        if (!simEngine.#instance) {
            simEngine.#instance = new simEngine()
        }
        
        return simEngine.#instance
    }
    
    createEntities(data: entityConfig[]){
        
        data.forEach((item:entityConfig) => {
        
            //returns existing entity
            if(this.entityMap.has(item.id)){
                return this.entityMap.get(item.id);
            }
        
            const  returned = entityCreatorHelper(item,EventBus);
            // console.log(returned)
            this.entityMap.set(item.id, returned);
            })

    }
    
    printEntities(){
       const entityInfoArray: {}[] = []

        /**
         *Tell each entity to return its information
         * and then input each returned value into the array
         * FYI it is an object
         */
        for(const [key,entity] of this.entityMap){
           // console.log(entity)
            entityInfoArray.push(entity.getInfo())
        }

        /**
         * 
         */
        return entityInfoArray
        
    
    }
    
}


