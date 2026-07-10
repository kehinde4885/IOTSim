import {SensorFactory, StateFactory} from "./Capability/core.ts";
import {EquipmentFactory} from "./Assets/core.ts";

import {EquipmentTypes, SensorTypes, StateTypes} from "./types.ts";

import {TempSensor} from "./Capability/Sensors/TempSensor.ts";
import {LightBulb} from "./Assets/Equipments/LightBulb.ts";
import {BinaryState} from "./Capability/Sensors/BinaryState.ts";


//Sensors
SensorFactory.register(SensorTypes.tempsensor, TempSensor);

//States
StateFactory.register(StateTypes.binaryState, BinaryState )


//Equipments
EquipmentFactory.register(EquipmentTypes.lightbulb, LightBulb)