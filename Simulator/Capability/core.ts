import {Entity, EntityFactory} from "../Core/entity.ts"


/**
 * Abstract methods are only compulsory
 * for the first non abstract(concrete) class
 * in the inheritance chain
 */
export abstract class Capability extends Entity{}

export abstract class Sensor extends Capability {
    abstract read(): {type:string, value: number}
    describe(){ return "sensor capability"}
}

export abstract class Actuator extends Capability{
    abstract act(command:string): void;
    
    describe(){return "actuator capability"}
}

export abstract class Parameter extends Capability {
    abstract getValue(): unknown;
    describe() { return "parameter capability"; }
}


/**
 * creates factories based on the entityFactory class
 * and ties them to their respective Entities
 * 
 * The sensorFactory can only create sensors ,
 * the ActuatorFactory only actuators and so on
 */
export const SensorFactory = new EntityFactory<Sensor>()
export const ActuatorFactory = new EntityFactory<Actuator>();
export const ParameterFactory = new EntityFactory<Parameter>();
