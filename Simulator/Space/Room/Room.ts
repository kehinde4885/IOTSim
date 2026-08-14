import { Space } from '../spaceCore.ts'
import { MyEmitter } from '../../EventBus.ts'
import {
  entityConfig,
  spaceArea,
  spaceCapacity,
  spaceCo2,
  spaceOccupancy,
} from '../../types.ts'

export class Room extends Space {
  personCapacity: number = 10

  personOccupancy: number = 4

  co2 = undefined

  humidity = undefined
  temperature = undefined

  capacity: spaceCapacity = {
    maxOccupancy: 34,
    seatingCapacity: 14,
  }

  area: spaceArea = {
    grossArea: 500,
    rentableArea: 350,
    usableArea: 420,
  }

  occupancy: spaceOccupancy = {
    isOccupied: false,
    peopleCount: 0,
  }

  constructor(config: entityConfig, eventBus: MyEmitter) {
    super(config, eventBus)
  }
}
