import {EntityCategory, entityConfig, EquipmentTypes, SensorTypes, SpaceTypes, StateTypes} from "./types.ts";

const data2: entityConfig[] = [
    {
        id: "121",
        type: EntityCategory.space,
        subtype: SpaceTypes.building,
        name: "building121"
    },
    {
        id: "1",
        type: EntityCategory.space,
        subtype: SpaceTypes.level,
        name: "level1",
        relationships: [{"isPartOf": ["121"]}]
    },
    {
        id: "101",
        type: EntityCategory.space,
        subtype: SpaceTypes.room,
        name: "room1",
        relationships: [{"hasCapability": ["5"]}]
    },
    {
        id:"5",
        type:EntityCategory.capability,
        subtype: SensorTypes.tempsensor,
        name: "tempSensorR",
    },
    {
        id:"L1.01",
        type: EntityCategory.asset,
        subtype: EquipmentTypes.hvac,
        name:"VAV L1.01",
        relationships: [
            {"hasCapability": ["8"]},
            {"locatedIn": ["101"]},
        ]
    },
    {
        id:"8",
        type: EntityCategory.capability,
        subtype: SensorTypes.tempsensor,
        name:"tempSensor8",
    }
]

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