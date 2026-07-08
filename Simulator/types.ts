
// Entity is the base object within the simulator
// the subtype of entity is used to narrow down the 
// specific child of entity.

import {AEntity} from "./Objects/index.ts";


export interface entityConfig {
    id: string,
    type: EntityType,
    subtype: subEntityTypes,
    name: string,
    relationships?: entityConfigRelation[],
}

type entityConfigRelation = {
    [key: string]: string[];
}

export enum EntityType {
    //here would be sensor actuator
    Space = "SPACE",
    Asset = "ASSET",
    Capability = "CAPABLE",
    // LogicalDevice = "DEVICE",
}


type subEntityTypes = SpaceType | AssetType | CapabilityType ;
export enum SpaceType {
    Room = "ROOM",
    Building ="BUILDING",
    Level = "LEVEL",
}

export enum AssetType {
    VAV = "VAV",

}



//this would change to SensorType
//this would change to tempsensor, firesensor
export enum CapabilityType {
    Light= "LIGHT",
    Temperature ="Temperature",
    Motion = "MOTION"
}


export type entityObject = AEntity;