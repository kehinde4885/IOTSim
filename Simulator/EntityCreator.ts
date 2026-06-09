import {AssetType, CapabilityType, entityConfig, entityObject, EntityType, SpaceType} from "./types.ts";


import {Light, MotionSensor, TempSensor, VAV} from "./Objects/index.ts";

import {data2} from "./EntitydataSet.ts";



//Example of logical device
// would be a smart bulb
// the smart bulb contains a motion sensor
// then the bulb turns on when motion is detected.


//Global Entity Map
console.log("creating global entity map")
const entityMap = new Map();


data2.forEach((item:entityConfig) => {
    
    const  returned = entityCreator(item);
   // console.log(returned)
    entityMap.set(item.id, returned);
})

console.log(entityMap)



function entityCreator(data:entityConfig): entityObject{
    
    //returns existing entity
    if(entityMap.has(data.id)){
        return entityMap.get(data.id);
    }
  
    //else creates one
    switch(data.type) {
            case EntityType.Capability:
                return capabilityCreator(data)
        
            case EntityType.Space:
                return spaceCreator(data)

            case EntityType.Asset:
                return assetCreator(data)
                
            default:
                console.log(`${data.type} is not configured`)
                //must implement a catch block
               throw new Error(`${data.type} is not configured`)
                             
                
        }
 
}


function capabilityCreator(entity: entityConfig):entityObject{
    switch(entity.subtype){
        case CapabilityType.Light:
            return new Light(entity)
        case CapabilityType.Motion:
            return new MotionSensor(entity)
        case CapabilityType.Temperature:
            return new TempSensor(entity)
        
        default:
            //must implement a catch block
            throw new Error(`${entity.subtype} is not configured`)
    }
    
}


function spaceCreator(entity: entityConfig):entityObject{
    switch(entity.subtype){
        case SpaceType.Room:
            return new TempSensor(entity)
        case SpaceType.Building:
            return new MotionSensor(entity)
        case SpaceType.Level:
            return new MotionSensor(entity)

        default:
            //must implement a catch block
            throw new Error(`${entity.subtype} is not configured`)
    }

}


function assetCreator(entity: entityConfig):entityObject{
    switch(entity.subtype){
        case AssetType.VAV:
            return new VAV(entity)

        default:
            //must implement a catch block
            throw new Error(`${entity.subtype} is not configured`)
    }

}



export {entityCreator}
