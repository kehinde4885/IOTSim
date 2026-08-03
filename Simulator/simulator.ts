
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
        
        data.forEach((config:entityConfig) => {
        
            //returns existing entity
            if(this.entityMap.has(config.id)){
                return this.entityMap.get(config.id);
            }
        
            const  returned = entityCreatorHelper(config,EventBus);
            // console.log(returned)
            this.entityMap.set(config.id, returned);
            })

    }
    
    createEntity(config:entityConfig){
        //returns existing entity
        if(this.entityMap.has(config.id)){
            return this.entityMap.get(config.id);
        }

        const  returned = entityCreatorHelper(config,EventBus);
        // console.log(returned)
        this.entityMap.set(config.id, returned);
       
        this.printEntities()
        
        return returned
        
    }
    
    deleteEntity(id:string){
        this.entityMap.delete(id)
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
        
        console.log("EIA",entityInfoArray)

        /**
         * 
         */
        return entityInfoArray
        
    
    }
    
}


