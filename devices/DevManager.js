import { HVAC } from "./hvac/Hvac.js";

export class DeviceManager {
  constructor(envManager) {
    this.devices = new Map();
    this.envManager = envManager;
    //sensormanager reference?
  }

  //***create device based on config
  createDevice(config) {
    if (this.devices.has(config.deviceId)) {
      throw new Error("Device already exists");
    }
  }
}
