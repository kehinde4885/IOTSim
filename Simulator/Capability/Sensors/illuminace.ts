import { Sensor } from '../capabilityCore.ts'

export class IlluminanceSensor extends Sensor {
  LastValueTime: Date = new Date()

  lastValue: number = 500
}
