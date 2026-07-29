
// Entity is the base object within the simulator
// the subtype of entity is used to narrow down the 
// specific child of entity.




/**
 * 
 */
// ------CAPABILITY TYPES -----
export enum SensorTypes {
    tempsensor = "TemperatureSensor",
    fireSensor = "FireSensor"
}

export enum ActuatorTypes {
    onoffActuator = "OnOffActuator",
     levelActuator = "LevelActuator"
}

export enum StateTypes {
    binaryState = "BinaryState"
}
export type CapabilityTypes = SensorTypes | ActuatorTypes | StateTypes


// ----ASSET TYPES----
export enum FurnitureTypes {
    bed = "Bed",
    chair = "Chair"
}

export enum EquipmentTypes {
    hvac = "HVACEquipment",
    lightbulb = "LightBulb"
}


export type AssetTypes = FurnitureTypes | EquipmentTypes


// ----SPACE TYPES------
export enum SpaceTypes {
    building ="Building",
    level = "Level",
    room = "Room"
}


/**
 * 
 */
export enum EntityTypes {
    capability ="Capability",
    space = "Space", 
    asset = "Asset"

}
export type EntitiesStrings = CapabilityTypes | AssetTypes | SpaceTypes

/**
 * 
 */
export interface entityConfig {
    id: string,
    type: EntityTypes,
    subtype: EntitiesStrings,
    name: string,
    relationships: entityConfigRelation[],
}

// export interface entityConfig {
//     eventBus: MyEmitter
// }
// export interface entityConfigUpdate extends  entityConfig {
//     eventBus: MyEmitter
// }

export type entityConfigRelation = {
    [key: string]: string[];
}
