

export interface entityData {
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

}

export enum CapabilityType {
    Light= "LIGHT",
    Temperature ="Temperature",
    Motion = "MOTION"
}
