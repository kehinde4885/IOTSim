import {
  AssetTypes,
  CapabilityTypes,
  entitiesSubTypes,
  entityConfig,
  EquipmentTypes,
  FurnitureTypes,
  SensorTypes,
  SpaceTypes,
  StateTypes,
} from './types.ts'

import { Entity } from './Core/entity.ts'
import { CapabilityFactory } from './Capability/capabilityCore.ts'
import { AssetFactory } from './Assets/assetCore.ts'
import { SpaceFactory } from './Space/spaceCore.ts'

//Example of logical device
// would be a smart bulb
// the smart bulb contains a motion sensor
// then the bulb turns on when motion is detected.

/**
 *
 * for function declaration ...args is rest operator
 * for function calling ...args is spread operator
 */
function entityCreatorHelper(config: entityConfig, ...args: any[]): Entity {
  const newConfig = [config, ...args]

  if (isCapabilityType(config.subtype)) {
    return CapabilityFactory.create(config.subtype, ...newConfig)
  }
  if (isSpaceType(config.subtype)) {
    return SpaceFactory.create(config.subtype, ...newConfig)
  }
  if (isAssetType(config.subtype)) {
    return AssetFactory.create(config.subtype, ...newConfig)
  }

  console.log(
    `${config.subtype} Factory not Created or ${config.subtype} not registered in existing factory`,
  )
  throw new Error(
    `${config.subtype} Factory not Created or ${config.subtype} not registered in existing factory`,
  )
}

/**
 *
 * TYPE GUARD function based on
 * available factories
 * See below for Explanation
 *
 */

function isCapabilityType(
  entitySubType: entitiesSubTypes,
): entitySubType is CapabilityTypes {
  return (
    Object.values(SensorTypes).includes(entitySubType as SensorTypes) ||
    Object.values(StateTypes).includes(entitySubType as StateTypes)
  )
}

function isSpaceType(
  entitySubType: entitiesSubTypes,
): entitySubType is SpaceTypes {
  return Object.values(SpaceTypes).includes(entitySubType as SpaceTypes)
}

function isAssetType(
  entitySubType: entitiesSubTypes,
): entitySubType is AssetTypes {
  return (
    Object.values(EquipmentTypes).includes(entitySubType as EquipmentTypes) ||
    Object.values(FurnitureTypes).includes(entitySubType as FurnitureTypes)
  )
}

export { entityCreatorHelper }

/**
 * TypeGuard Explanation
 * function isSensorType(entity: Entities): entity is SensorTypes{
 *     return Object.values(SensorTypes).includes(entity as SensorTypes)
 * }
 *
 * SensorTypes in Object.values(SensorTypes) resolves to a plain JS Object
 * const SensorTypes = {
 *   tempSensor: "TemperatureSensor",
 *   humiditySensor: "HumiditySensor"
 * };
 *
 * Object.values returns an array of an objects values. in this case
 * ["TemperatureSensor", "HumiditySensor"]
 *
 * .includes(entity)
 * entity is the string that was passed to the function, it is of type Entities
 *
 * .includes(entity as SensorTypes)
 * entity is typed as Entities (the union SensorTypes | ActuatorTypes | FurnitureTypes).
 * But .includes() on an array of type SensorTypes[] expects its argument to be SensorTypes —
 * not the broader Entities union. So without the cast, TypeScript would complain:
 * Argument of type 'Entities' is not assignable to parameter of type 'SensorTypes'.
 * entity as SensorTypes is a type assertion — you're telling TypeScript:
 * "Trust me, treat entity as a SensorTypes for this call,
 * even though its declared type is the wider Entities union."
 *
 * This is safe here because:
 *
 * We're not changing what entity actually is at runtime —
 * it's still whatever value was passed in.
 * We're just satisfying TypeScript's type checker so .includes() will accept it.
 * The .includes() check itself is what actually
 * determines the true/false answer
 * — the cast doesn't affect that logic at all,
 * it's purely to make the compiler happy.
 *
 *
 */
