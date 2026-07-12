import {EntityCategory, entityConfig, EquipmentTypes, SensorTypes, SpaceTypes, StateTypes} from "./types.ts";


const data3: entityConfig[] = [
    {
        id: "9503",
        subtype: EquipmentTypes.lightbulb,
        type: EntityCategory.asset,
        name: "LightBulb",
        relationships:[
            {"hasCapability": ["7890"]}
        ]
    },
    {
        id: "7890",
        subtype: StateTypes.binaryState,
        type: EntityCategory.capability,
        name: "onOffState",
        relationships:[
            {"isCapabilityOf": ["7890"]}
        ]
    }
]
export {data3}