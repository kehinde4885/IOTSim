import express from "express";
import cors from "cors";
import { EnvManager } from "./EnvManager.js";
import { SensorManager } from "./SensorManager.js";
import { sendToWS } from "./wsclient.js";
import { createSensorRoutes } from "./routes/sensors.routes.js";
import { createEnvRoutes } from "./routes/env.router.js";
import { createDeviceRoutes } from "./routes/dev.router.js";
import { DeviceManager } from "./devices/DevManager.js";

const app = express();

const devManager = new DeviceManager();

const envManager = new EnvManager();

const sensorManager = new SensorManager(sendToWS, envManager);

const SENSOR_TICK = 2000;

//Registering a simulation tick to update all sensors every second;
setInterval(() => {
  sensorManager.simulateAll();
}, SENSOR_TICK);

app.use(express.json());
app.use(cors());

//at this path, mount this router(function returns a router)
app.use("/api/sensors", createSensorRoutes(sensorManager));

app.use("api/env", createEnvRoutes(envManager))

app.use("/api/devices", createDeviceRoutes(devManager))


app.listen(3000, () => {
  console.log("Simulator backend running on port 3000");
});
