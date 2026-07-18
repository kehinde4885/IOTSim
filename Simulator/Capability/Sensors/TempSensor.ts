import {Sensor} from "../core.ts";
import {entityConfig} from "../../types.ts";
import {MyEmitter} from "../../EventBus.ts";

export class TempSensor extends Sensor{
    name: string;
    lastValue: number;
    LastValueTime: Date;
    id: string;
    

    constructor(config: entityConfig, eventBus:MyEmitter) {
        super(config.relationships,eventBus)
        this.LastValueTime = new Date()
        this.lastValue = 28;
        this.name = config.name || "Temperature Sensor";
        this.id = config.id;
        

    }
    
}