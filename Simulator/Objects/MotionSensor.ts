import {AEntity} from "./Base.ts"
import {entityConfig} from "../types.ts";

//


export class MotionSensor extends AEntity{
    //STATE
    private motionDetected: boolean ;
    // private brightness: number = 1
    // private colorTemp: number = 2700; // warm household bulb 

    constructor(config: entityConfig){
        super(config);
        this.type = "MotionSensor";
        this.motionDetected = false;
    }

    
}