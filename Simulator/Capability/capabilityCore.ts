import { Entity, EntityFactory } from '../Core/entity.ts'

/**
 * Abstract methods are only compulsory
 * for the first non abstract(concrete) class
 * in the inheritance chain
 */
export abstract class Capability extends Entity {
  abstract LastValueTime: Date
}

export abstract class Sensor extends Capability {}

export abstract class State extends Capability {}

export abstract class Actuator extends Capability {}

export abstract class Parameter extends Capability {}

/**
 * creates factories based on the entityFactory class
 * and ties them to their respective Entities
 *
 * The sensorFactory can only create sensors ,
 * the ActuatorFactory only actuators and so on
 */

export const CapabilityFactory = new EntityFactory<Capability>()
