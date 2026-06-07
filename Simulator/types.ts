
// Entity is the base object within the simulator
// the subtype of entity is used to narrow down the 
// specific child of entity.

import {AEntity} from "./Objects";


export interface entityConfig {
    id: number,
    type: EntityType,
    subtype: subEntityTypes,
    name: string,
    parent: number,
}


export enum EntityType {
    Space = "SPACE",
    Asset = "ASSET",
    Capability = "CAPABLE",
    // LogicalDevice = "DEVICE",
}


type subEntityTypes = SpaceType | AssetType | CapabilityType ;
export enum SpaceType {
    Room = "ROOM",
    Building ="BUILDING",
}

export enum AssetType {
    Chair = "CHAIR",

}

export enum CapabilityType {
    Light= "LIGHT",
    Temperature ="Temperature",
    Motion = "MOTION"
}


export type entityObject = AEntity;