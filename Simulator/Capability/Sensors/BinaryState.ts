
import {State} from "../core.ts";
import {entityConfig} from "../../types.ts";
import {MyEmitter} from "../../EventBus.ts";

export class BinaryState extends State{
    name: string;
    lastValue: boolean;
    LastValueTime: Date;
    id: string;
  

   constructor(config: entityConfig, eventBus:MyEmitter) {
        super(config.relationships,eventBus)
        this.LastValueTime = new Date()
        this.lastValue = false;
        this.name = config.name || "Binary Sensor";
        this.id = config.id;
   }


}