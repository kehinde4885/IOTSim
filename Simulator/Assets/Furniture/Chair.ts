import { Asset } from '../assetCore.ts'
import { entityConfig } from '../../types.ts'
import { MyEmitter } from '../../EventBus.ts'

export class Chair extends Asset {
  serialNumber: string

  constructor(config: entityConfig, eventBus: MyEmitter) {
    super(config, eventBus)
    this.serialNumber = '38920820'
  }
}
