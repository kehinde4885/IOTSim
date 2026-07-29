import {Router} from "express";

import {
    ActuatorTypes,
    EntityTypes,
    EquipmentTypes,
    FurnitureTypes,
    SensorTypes, SpaceTypes,
    StateTypes
} from "../Simulator/types.ts";


const router = Router()

/** 
 * helper function to turn an enum object into [{value,label},{value,label}]
 * 
 * example enum SensorTypes {
 *     tempsensor = "TemperatureSensor",
 *     fireSensor = "FireSensor"
 * }
 * Turns into [{tempsensor:TemperatureSensor},{fireSensor:"FireSensor}]
 */
function enumToOptions(e: Record<string,string>){
    return Object.values(e).map((v)=> ({value:v, label:v}))
}

//API Route
router.get('/api/entity-options', (req, res)=>{
    
    console.log("Getting it")
    //{ types :[{},{}] }
    res.json({
        types: [
            {
                value: EntityTypes.capability,
                label: 'Capability',
                subtypes: [
                    ...enumToOptions(SensorTypes),
                        ...enumToOptions(ActuatorTypes),
                    ...enumToOptions(StateTypes)
                ]
            },
            {
                value: EntityTypes.asset,
                label: "Asset",
                subtypes: [
                    ...enumToOptions(FurnitureTypes),
                        ...enumToOptions(EquipmentTypes),
                ]
            },
            {
                value: EntityTypes.space,
                label: "Space",
                subtypes: enumToOptions(SpaceTypes),
            }
        ],
        relationships: ['isCapabilityOf', 'isPartOf', 'hasPart', 'isLocatedIn']
    })
})


export default router