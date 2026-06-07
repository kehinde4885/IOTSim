import {CapabilityType, entityConfig, EntityType, SpaceType} from "./types.ts";

const data: entityConfig[] = [
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
    {
        id: 103,
        type: EntityType.Capability,
        subtype: CapabilityType.Motion,
        name: "motionSensor",
        parent: 504,
    },
    {
        id: 504,
        type: EntityType.Space,
        subtype: SpaceType.Room,
        name: "bedroom",
        parent: 0,
    }
]

export {data}