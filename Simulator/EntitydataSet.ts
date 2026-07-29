import {EntityTypes, entityConfig, EquipmentTypes, StateTypes} from "./types.ts";


const data3: entityConfig[] = [
    {
        id: "9503",
        subtype: EquipmentTypes.lightbulb,
        type: EntityTypes.asset,
        name: "LightBulb",
        relationships:[
            {"hasCapability": ["7890","800"]},
            {"hasEquipment": ["78","42"]}
        ]
    },
    {
        id: "7890",
        subtype: StateTypes.binaryState,
        type: EntityTypes.capability,
        name: "onOffState",
        relationships:[
            {"isCapabilityOf": ["7890"]}
        ]
    }
]
export {data3}