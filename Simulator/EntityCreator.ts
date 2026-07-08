import {AssetType, CapabilityType, entityConfig, entityObject, EntityType, SpaceType} from "./types.ts";


import {Light, MotionSensor, TempSensor, VAV} from "./Objects/index.ts";





//Example of logical device
// would be a smart bulb
// the smart bulb contains a motion sensor
// then the bulb turns on when motion is detected.



function entityCreator(data:entityConfig): entityObject{
    

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
