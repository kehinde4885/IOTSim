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

//Sensors
CapabilityFactory.register(SensorTypes.tempsensor, TempSensor)

//States
CapabilityFactory.register(StateTypes.binaryState, BinaryState)

//Furniture
AssetFactory.register(FurnitureTypes.chair, Chair)

//Equipments
AssetFactory.register(EquipmentTypes.lightbulb, LightBulb)

//Rooms
SpaceFactory.register(SpaceTypes.room, Room)
