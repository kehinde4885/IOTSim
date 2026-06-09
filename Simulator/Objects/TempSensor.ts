import {AEntity} from "./Base.ts"
import {entityConfig} from "../types.ts";

export class TempSensor extends AEntity{
    temperature: number;
  
  
    
    constructor(entity:entityConfig) {
        super(entity);
        this.temperature = 25;
    }
    
    
    
}