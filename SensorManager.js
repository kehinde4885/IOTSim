import { LightSensor } from "./sensors/Sensor.js";

class SensorManager {
  //sensor manager contains a map of sensors
  constructor(sendData) {
    this.sensors = new Map();
    this.sendData = sendData;
    //console.log("SensorManager", sendDataToWebSocket);
  }

  createSensor(config) {
    if (this.sensors.has(config.sensorId)) {
      throw new Error("Sensor already exists");
    }

    let sensor;

    // create sensor
    if (config.type === "Light") {
      sensor = new LightSensor({
        ...config,
        sendData: this.sendData,
      });
    }

    //start sensor
    sensor.start();

    //store sensor in key value pair
    this.sensors.set(sensor.sensorId, sensor);

    this.tickPrint();
  }

  deleteSensor(sensorId) {}

  listSensors() {
    //get the maps values, store it in an array,
    //then loop over the array
    return [...this.sensors.values()].map((s) => ({
      sensorId: s.sensorId,
      type: s.type,
      interval: s.interval,
    }));
  }

  tickPrint() {
    setInterval(() => {
      console.log(this.listSensors());
    }, 2000);
  }
}

export { SensorManager };
