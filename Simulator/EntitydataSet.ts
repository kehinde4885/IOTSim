import {
  EntityCategory,
  entityConfig,
  EquipmentTypes,
  StateTypes,
  SpaceTypes,
  FurnitureTypes,
  SensorTypes,
} from './types.ts'

const data3: entityConfig[] = [
  {
    id: '9507',
    subtype: SensorTypes.illuminancesensor,
    type: EntityCategory.capability,
    name: 'IlluminanceSensor',
    relationships: [{ partOf: ['9503'] }],
  },
  {
    id: '9506',
    subtype: SensorTypes.humiditysensor,
    type: EntityCategory.capability,
    name: 'HumiditySensor',
    relationships: [{ partOf: ['9503'] }],
  },
  {
    id: '9503',
    subtype: EquipmentTypes.lightbulb,
    type: EntityCategory.asset,
    name: 'LightBulb',
    relationships: [
      { hasCapability: ['7890', '800'] },
      { hasEquipment: ['78', '42'] },
    ],
  },
  {
    id: '7890',
    subtype: StateTypes.binaryState,
    type: EntityCategory.capability,
    name: 'onOffState',
    relationships: [{ isCapabilityOf: ['7890'] }],
  },
  {
    id: '9504',
    subtype: SpaceTypes.room,
    type: EntityCategory.space,
    name: 'MasterBedroom',
    relationships: [
      { hasEquipment: ['9503', '78', '42'] },
      { partOf: ['9501'] },
    ],
  },
  {
    id: '9505',
    subtype: FurnitureTypes.chair,
    type: EntityCategory.asset,
    name: 'Chair',
    relationships: [
      { hasCapability: [] },
      { hasEquipment: [] },
      { partOf: ['9504'] },
    ],
  },
]
export { data3 }
