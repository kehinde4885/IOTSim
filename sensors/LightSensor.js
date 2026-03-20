import Sensor from "./Sensor.js";

class LightSensor extends Sensor {
  constructor(config) {
    super({ ...config, type: "Light" });

    //on by default
    this.value = true;
  }

  getValue() {
    return this.value;
  }

  startTransmission() {
    //override start to send immediate data on start
    super.startTransmission();
  }

  itemize() {
    return {
      sensorId: this.sensorId,
      type: this.type,
      interval: this.interval,
      value: this.value,
    };
  }

  simulate() {
    //toggle light state
  }

  toggleSensor() {
    this.value = !this.value;
  }
}

export { LightSensor };
