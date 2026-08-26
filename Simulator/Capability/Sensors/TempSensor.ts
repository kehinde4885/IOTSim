import { Sensor } from '../capabilityCore.ts'
import { entityConfig } from '../../types.ts'
import { MyEmitter } from '../../EventBus.ts'

export class TempSensor extends Sensor {
  name: string
  lastValue: number = 28
  LastValueTime: Date = new Date()

  constructor(config: entityConfig, eventBus: MyEmitter) {
    super(config, eventBus)

    this.name = config.name || 'Temperature Sensor'
  }
}
