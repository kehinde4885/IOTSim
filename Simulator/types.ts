
// Entity is the base object within the simulator
// the subtype of entity is used to narrow down the 
// specific child of entity.


import {MyEmitter} from "./EventBus.ts";

/**
 * 
 */
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
export type Capability = SensorTypes | ActuatorTypes | StateTypes


/**
 * 
 */
export enum FurnitureTypes {
    bed = "Bed",
    chair = "Chair"
}

export enum EquipmentTypes {
    hvac = "HVACEquipment",
    lightbulb = "LightBulb"
}


export type Assets = FurnitureTypes | EquipmentTypes


/**
 * 
 */
export enum SpaceTypes {
    building ="Building",
    level = "Level",
    room = "Room"
}


/**
 * 
 */
export enum EntityCategory {
    capability ="Capability",
    space = "Space", 
    asset = "Asset"

}
export type EntitiesStrings = Capability | Assets | SpaceTypes

/**
 * 
 */
export interface entityConfig {
    id: string,
    type: EntityCategory,
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
