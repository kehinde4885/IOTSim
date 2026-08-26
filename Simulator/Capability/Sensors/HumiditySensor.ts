import { Sensor } from '../capabilityCore.ts'

export class HumiditySensor extends Sensor {
  LastValueTime: Date = new Date()

  lastValue: number = 50
}
