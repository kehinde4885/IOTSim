import {
    EntitiesStrings,
    entityConfig, EquipmentTypes,
    SensorTypes, StateTypes,

} from "./types.ts";

import {Entity} from "./Core/entity.ts";
import {SensorFactory, StateFactory} from "./Capability/core.ts";
import {EquipmentFactory} from "./Assets/core.ts";




//Example of logical device
// would be a smart bulb
// the smart bulb contains a motion sensor
// then the bulb turns on when motion is detected.


/**
 * 
 * for function declaration ...args is rest operator
 * for function calling ...args is spread operator
 */
function entityCreatorHelper(config:entityConfig, ...args: any[]): Entity{
  
    
    
    const newConfig = [config,...args]
        
    if(isSensorType(config.subtype)){
        return SensorFactory.create(config.subtype, ...newConfig)
    }
    if(isEquipmentType(config.subtype)){
        return EquipmentFactory.create(config.subtype, ...newConfig)
    }
    if(isStateType(config.subtype)){
        return StateFactory.create(config.subtype, ...newConfig)
    }
    
    
    
    console.log(`${config.subtype} Factory not Created`)
    throw new Error(`${config.subtype} Factory not Created`)
    


}


/**
 * 
 * TYPE GUARD function based on
 * available factories
 * See below for Explanation
 * 
 */
function isSensorType(entitySubType: EntitiesStrings): entitySubType is SensorTypes{
    return Object.values(SensorTypes).includes(entitySubType as SensorTypes)    
}

function isEquipmentType(entitySubType: EntitiesStrings): entitySubType is EquipmentTypes{
    return Object.values(EquipmentTypes).includes(entitySubType as EquipmentTypes)
}

function isStateType(entitySubType: EntitiesStrings): entitySubType is StateTypes{
    return Object.values(StateTypes).includes(entitySubType as StateTypes)
}




export {entityCreatorHelper}


/**
 * TypeGuard Explanation
 * function isSensorType(entity: Entities): entity is SensorTypes{
 *     return Object.values(SensorTypes).includes(entity as SensorTypes)
 * }
 * 
 * SensorTypes in Object.values(SensorTypes) resolves to a plain JS Object
 * const SensorTypes = {
 *   tempSensor: "TemperatureSensor",
 *   humiditySensor: "HumiditySensor"
 * };
 * 
 * Object.values returns an array of an objects values. in this case
 * ["TemperatureSensor", "HumiditySensor"]
 * 
 * .includes(entity)
 * entity is the string that was passed to the function, it is of type Entities
 * 
 * .includes(entity as SensorTypes)
 * entity is typed as Entities (the union SensorTypes | ActuatorTypes | FurnitureTypes). 
 * But .includes() on an array of type SensorTypes[] expects its argument to be SensorTypes — 
 * not the broader Entities union. So without the cast, TypeScript would complain:
 * Argument of type 'Entities' is not assignable to parameter of type 'SensorTypes'.
 * entity as SensorTypes is a type assertion — you're telling TypeScript: 
 * "Trust me, treat entity as a SensorTypes for this call, 
 * even though its declared type is the wider Entities union."
 * 
 * This is safe here because:
 *
 * We're not changing what entity actually is at runtime — 
 * it's still whatever value was passed in.
 * We're just satisfying TypeScript's type checker so .includes() will accept it.
 * The .includes() check itself is what actually 
 * determines the true/false answer 
 * — the cast doesn't affect that logic at all, 
 * it's purely to make the compiler happy.
 * 
 * 
 */