import AObject from "./Object.js"
import {Config} from "./Object.js";

//

enum PowerState {
    On="ON",
    Off="OFF",
}

class Light extends AObject{
    //STATE
    private powerState: PowerState = PowerState.Off ;
    // private brightness: number = 1
    // private colorTemp: number = 2700; // warm household bulb 

    constructor(config: Config){
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