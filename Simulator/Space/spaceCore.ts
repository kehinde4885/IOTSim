import { Entity, EntityFactory } from '../Core/entity.ts'

import {
  spaceArea,
  spaceCapacity,
  spaceCo2,
  spaceHumidity,
  spaceOccupancy,
  spaceTemperature,
} from '../types.ts'

export abstract class Space extends Entity {
  // Number of people who can fit in a space
  abstract personCapacity: number
  // Number of people currently occupying space
  abstract personOccupancy: number

  //Components
  abstract area?: spaceArea | undefined
  abstract capacity: spaceCapacity | undefined
  abstract temperature: spaceTemperature | undefined
  abstract humidity: spaceHumidity | undefined
  abstract co2: spaceCo2 | undefined
  abstract occupancy: spaceOccupancy | undefined
}

export const SpaceFactory = new EntityFactory<Space>()
