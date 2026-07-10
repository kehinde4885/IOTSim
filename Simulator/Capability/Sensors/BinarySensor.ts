
import {Sensor} from "../core.ts";
import {entityConfig} from "../../types.ts";

export class BinarySensor extends Sensor{
    name: string;
    lastValue: boolean;
    LastValueTime: Date;
    id: string;
   

    constructor(config: entityConfig) {
        super(config)
        this.LastValueTime = new Date()
        this.lastValue = false;
        this.name = config.name || "Binary Sensor";
        this.id = config.id;
       


    }
    
}