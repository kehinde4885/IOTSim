import Device from "./Device.js";
import { eventBus } from "../eventBus.js";

class ALARM extends Device {
  constructor(config) {
    super(config);

    console.log("ALARM using config", config);
    console.log("ALARM BEEPER CREATED");

    this.id = config.deviceId;
    this.linkedSmokedSensorId = config.smokeSensorId;
    this.isOn = false;

    this.smokeEventHandler = this.handleSmokeEvent.bind(this);

    this.subscribe();
  }

  //Remember to unsubscribe on delete
  subscribe() {
    eventBus.on("smoke:changed", this.smokeEventHandler);
  }

  unsubscribe() {
    eventBus.off("smoke:changed", this.smokeEventHandler);
  }

  handleSmokeEvent(event) {
    const sensorId = event.sensorId;
    const value = event.value;

    //if smoke sensor is not linked to alarm
    if (!this.linkedSmokedSensorId === sensorId) {
      return;
    }

    //if smoke sensor is on
    if (value === true) {
      this.triggerAlarm(sensorId);
    } else {
      this.resetAlarm(sensorId);
    }
  }

  triggerAlarm(sensorId) {
    if (this.isOn) return;

    this.isOn = true;
    console.log(`🚨 ALARM ${this.id} TRIGGERED by Smoke Sensor ${sensorId}`);
  }

  resetAlarm(sensorId) {
    // Optional logic — real alarms usually require manual reset
    this.isOn = false;
    console.log(`✅ ALARM ${this.id} reset from Smoke Sensor ${sensorId}`);
  }



  simulate() {
    //Alam sensor does not
    //really need simulate does it?
  }

  stop() {
    super.stop();
    this.unsubscribe();
  }
}

export { ALARM };
