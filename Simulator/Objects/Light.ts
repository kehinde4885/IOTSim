import {AEntity} from "./Base.ts"
import {entityConfig} from "../types.ts";

//

enum PowerState {
    On="ON",
    Off="OFF",
}

export class Light extends AEntity{
    //STATE
    private powerState: PowerState ;
    // private brightness: number = 1
    // private colorTemp: number = 2700; // warm household bulb 

    constructor(config: entityConfig){
        super(config);
        this.type = "Light"
        this.powerState = PowerState.On;
    }

    get status(): PowerState {
        return this.powerState
    }

    set status(newValue:PowerState){
        this.powerState = newValue;
    }

    toggleLight(){
        this.powerState = this.powerState === PowerState.On ?
            PowerState.Off :
            PowerState.On
    }

}