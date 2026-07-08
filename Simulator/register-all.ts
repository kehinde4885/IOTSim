import {SensorFactory, ActuatorFactory, ParameterFactory} from "./Capability/core.ts";

import {TempSensor} from "./Capability/Sensors/TempSensor.ts";

SensorFactory.register('temp',TempSensor);
