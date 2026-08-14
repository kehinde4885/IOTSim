// Entity is the base object within the simulator
// the subtype of entity is used to narrow down the
// specific child of entity.

/**
 *******************************************************************
 */
// ------CAPABILITY SUBTYPES -----
export enum SensorTypes {
  tempsensor = 'TemperatureSensor',
  fireSensor = 'FireSensor',
}

export enum ActuatorTypes {
  onoffActuator = 'OnOffActuator',
  levelActuator = 'LevelActuator',
}

export enum StateTypes {
  binaryState = 'BinaryState',
}
export type CapabilityTypes = SensorTypes | ActuatorTypes | StateTypes

// ----ASSET SUBTYPES----
export enum FurnitureTypes {
  bed = 'Bed',
  chair = 'Chair',
}

export enum EquipmentTypes {
  hvac = 'HVACEquipment',
  lightbulb = 'LightBulb',
}

export type AssetTypes = FurnitureTypes | EquipmentTypes

// ----SPACE SUBTYPES------
export enum SpaceTypes {
  building = 'Building',
  level = 'Level',
  room = 'Room',
}

/**
 *
 */
export enum EntityCategory {
  capability = 'Capability',
  space = 'Space',
  asset = 'Asset',
}
export type entitiesSubTypes = CapabilityTypes | AssetTypes | SpaceTypes

/**
 *************************************************
 */
export interface entityConfig {
  id: string
  type: EntityCategory
  subtype: entitiesSubTypes
  name: string
  relationships: entityConfigRelation[]
}

// export interface entityConfig {
//     eventBus: MyEmitter
// }
// export interface entityConfigUpdate extends  entityConfig {
//     eventBus: MyEmitter
// }

export type entityConfigRelation = {
  [key: string]: string[]
}

// ****************************************************//
export interface spaceCapacity {
  maxOccupancy: number
  seatingCapacity: number
}

export interface spaceArea {
  grossArea: number
  usableArea: number
  rentableArea: number
}

export interface spaceTemperature {
  temperatureSensor: number
  temperatureSetpoint: number
  temperatureDelta: number
}

export interface spaceHumidity {
  humiditySensor: number
  humiditySetpoint: number
  humidityDelta: number
}

export interface spaceCo2 {
  co2Sensor: number
  co2Setpoint: number
  co2Delta: number
}

export interface spaceOccupancy {
  isOccupied: boolean
  peopleCount: number
  hasInferredOccupancy?: boolean
  dwellTimeAverage?: number // seconds
  entranceDwellTime?: number // seconds
  exitDwellTime?: number // seconds
  entranceRate?: number // people per second
  exitRate?: number
}
