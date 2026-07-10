import {Equipment} from "../core.ts";
import {entityConfig} from "../../types.ts";


export class LightBulb extends Equipment{
    name: string
    powerInput: number = 50;
    serialNumber: string
   
    
    constructor(config: entityConfig){
        super(config)
        this.serialNumber ="38920820"
        this.name = config.name

     
    }
    
    
}