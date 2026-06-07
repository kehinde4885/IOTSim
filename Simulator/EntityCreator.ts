import {AssetType, CapabilityType, entityConfig, entityObject, EntityType, SpaceType} from "./types.ts";


import {Light, MotionSensor, TempSensor} from "./Objects";


//Example of logical device
// would be a smart bulb
// the smart bulb contains a motion sensor
// then the bulb turns on when motion is detected.


// //raw data
// console.log(data)
//
// //live entity map
// const entityMap = new Map();
//
//
// data.forEach(entity=>{
//
//     const existEntry = entityMap.get(entity.id)
//
//     if(existEntry){
//
//     }



//Global Entity Map
console.log("creating global entity map")
const entityMap = new Map();


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
                throw new Error(`${data.type} is not configured`)
                             
                
        }
 
}


function capabilityCreator(entity: entityConfig):entityObject{
    switch(entity.subtype){
        case CapabilityType.Light:
            return new Light(entity)
        case CapabilityType.Motion:
            return new MotionSensor(entity)
        
        default:
            console.log(`Unknown subtype "${entity.subtype}"`)
            return
    }
    
}


function spaceCreator(entity: entityConfig){
    switch(entity.subtype){
        case SpaceType.Room:
            return new TempSensor(entity)
        case SpaceType.Building:
            return new MotionSensor(entity)

        default:
            console.log(`Unknown subtype "${entity.subtype}"`)
    }

}


function assetCreator(entity: entityConfig){
    switch(entity.subtype){
        case AssetType.Chair:
            return new Chair(entity)

        default:
            console.log(`Unknown subtype "${entity.subtype}"`)
    }

}



//entityCreator(data);


export {entityCreator}
