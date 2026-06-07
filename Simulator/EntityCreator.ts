import {CapabilityType, entityData, EntityType} from "./types.ts";


const data: entityData[] = [
    {
        id: 101,
        type: EntityType.Capability,
        subtype: CapabilityType.Light,
        name: "bedroom light",
        parent: 504,
    },
    {
        id: 102,
        type: EntityType.Capability,
        subtype: CapabilityType.Temperature,
        name: "tempSensor",
        parent: 504,
    },
    // {
    //     id: 103,
    //     type: "Motion Sensor",
    //     name: "motionSensor",
    //     parent: 504,
    // },
    // {
    //     id: 504,
    //     type: "Room",
    //     name: "bedroom",
    //
    // }
]

//Example of logical device
// would be a smart bulb
// the smart bulb contains a motion sensor
// then the bulb turns on when motion is detected.


function entityCreator(data:entityData[]){
    //raw data
    console.log(data)
    
    //live entity map
    const entityMap = new Map();
    

    data.forEach(entity=>{
        
        const existEntry = entityMap.get(entity.id) 
        
        if(existEntry){
            
        }
        
        switch(entity.type) {
            case EntityType.Capability:
                return  capabilityCreator(entity)
               
            default:
                console.log(`${entity.type} is not configured`)
                
                
        }
        

    })

}


function capabilityCreator(entity){
    switch(entity.subtype){
        case CapabilityType.Light:
            return new Light(entity)
    }
    
}


entityCreator(data);


export {entityCreator}
