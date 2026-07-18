import {Equipment} from "../core.ts";
import {entityConfig} from "../../types.ts";
import {MyEmitter} from "../../EventBus.ts";


export class LightBulb extends Equipment{
    name: string
    powerInput: number = 50;
    serialNumber: string
    id: string;


    constructor(config: entityConfig, eventBus:MyEmitter) {
        super(config.relationships,eventBus)
        this.serialNumber ="38920820"
        this.name = config.name
        this.id = config.id
    }
    
}