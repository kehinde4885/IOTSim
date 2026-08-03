import {Sensor} from "../core.ts";
import {entityConfig} from "../../types.ts";
import {MyEmitter} from "../../EventBus.ts";

export class TempSensor extends Sensor{
    name: string;
    lastValue: number;
    LastValueTime: Date;
    

    constructor(config: entityConfig, eventBus:MyEmitter) {
        
        super(config,eventBus)
        this.LastValueTime = new Date()
        this.lastValue = 28;
        this.name = config.name || "Temperature Sensor";
                    

    }
    
}