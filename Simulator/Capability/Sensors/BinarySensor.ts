
import {Sensor} from "../capabilityCore.ts";
import {entityConfig} from "../../types.ts";
import {MyEmitter} from "../../EventBus.ts";

export class BinarySensor extends Sensor{
    name: string;
    lastValue: boolean;
    LastValueTime: Date;
   


    constructor(config: entityConfig, eventBus:MyEmitter) {
        super(config,eventBus)
        this.LastValueTime = new Date()
        this.lastValue = false;
        this.name = config.name || "Binary Sensor";
        
        
    }



}