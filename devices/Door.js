import Device from "./Device.js";

class Door extends Device {
  constructor(config) {
    super(config);
    console.log("Door created using", config);

    //Added Properties
    this.id = config.deviceId;
    //
  }
}

export { Door };
