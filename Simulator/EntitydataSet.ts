import {AssetType, CapabilityType, entityConfig, EntityType, SpaceType} from "./types.ts";

const data: entityConfig[] = [
    {
        id: "101",
        type: EntityType.Capability,
        subtype: CapabilityType.Light,
        name: "bedroom light",
        relationships: [{}],
    },
    {
        id: "102",
        type: EntityType.Capability,
        subtype: CapabilityType.Temperature,
        name: "tempSensor",
     
    },
    {
        id: "103",
        type: EntityType.Capability,
        subtype: CapabilityType.Motion,
        name: "motionSensor",
       
    },
    {
        id: "504",
        type: EntityType.Space,
        subtype: SpaceType.Room,
        name: "bedroom",
    
    }
]


const data2: entityConfig[] = [
    {
        id: "121",
        type: EntityType.Space,
        subtype: SpaceType.Building,
        name: "building121"
    },
    {
        id: "1",
        type: EntityType.Space,
        subtype: SpaceType.Level,
        name: "level1",
        relationships: [{"isPartOf": ["121"]}]
    },
    {
        id: "101",
        type: EntityType.Space,
        subtype: SpaceType.Room,
        name: "room1",
        relationships: [{"hasCapability": ["5"]}]
    },
    {
        id:"5",
        type:EntityType.Capability,
        subtype: CapabilityType.Temperature,
        name: "tempSensorR",
    },
    {
        id:"L1.01",
        type: EntityType.Asset,
        subtype:AssetType.VAV,
        name:"VAV L1.01",
        relationships: [
            {"hasCapability": ["8"]},
            {"locatedIn": ["101"]},
        ]
    },
    {
        id:"8",
        type: EntityType.Capability,
        subtype: CapabilityType.Temperature,
        name:"tempSensor8",
    }
]
export {data2}