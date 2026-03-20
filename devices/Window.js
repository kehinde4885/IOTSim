import Device from "./Device.js";

class Window extends Device {
  constructor(config) {
    super(config);
    console.log("Windoow created using", config);

    //Added Properties
    this.id = config.deviceId;
    //
  }
}

export { Window };
