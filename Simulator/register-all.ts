import { AssetFactory } from './Assets/assetCore.ts'
import { SpaceFactory } from './Space/spaceCore.ts'
import { CapabilityFactory } from './Capability/capabilityCore.ts'

import {
  EquipmentTypes,
  FurnitureTypes,
  SensorTypes,
  SpaceTypes,
  StateTypes,
} from './types.ts'

import { Chair } from './Assets/Furniture/Chair.ts'

import { TempSensor } from './Capability/Sensors/TempSensor.ts'
import { LightBulb } from './Assets/Equipments/LightBulb.ts'
import { BinaryState } from './Capability/Sensors/BinaryState.ts'
import { Room } from './Space/Room/Room.ts'
import { HumiditySensor } from './Capability/Sensors/HumiditySensor.ts'
import { IlluminanceSensor } from './Capability/Sensors/illuminace.ts'

//Capability
CapabilityFactory.register(SensorTypes.tempsensor, TempSensor)
CapabilityFactory.register(StateTypes.binaryState, BinaryState)
CapabilityFactory.register(SensorTypes.illuminancesensor, IlluminanceSensor)
CapabilityFactory.register(SensorTypes.humiditysensor, HumiditySensor)

//Assets
AssetFactory.register(FurnitureTypes.chair, Chair)
AssetFactory.register(EquipmentTypes.lightbulb, LightBulb)

//Spaces
SpaceFactory.register(SpaceTypes.room, Room)
