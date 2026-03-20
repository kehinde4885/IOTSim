import Device from "./Device.js";

class Fan extends Device {
  constructor(config) {
    super(config);
    console.log("Fan using Config", config);
    console.log("FAN CREATED");

    //Added Properties
    this.id = config.deviceId;
    //

    //could Affect ambient temp later
  }


 

  simulate() {
    //This is where it would touch ambient Temp
  }
}

export { Fan };
