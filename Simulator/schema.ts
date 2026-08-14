
import {z} from 'zod'
import {
    ActuatorTypes,
    EntityTypes,
    EquipmentTypes,
    FurnitureTypes,
    SensorTypes,
    SpaceTypes,
    StateTypes
} from "./types.ts";


// ---- zod enum schemas (works directly with TS enums) ----
const SensorTypesSchema = z.enum(SensorTypes)
const ActuatorTypesSchema = z.enum(ActuatorTypes)
const StateTypesSchema = z.enum(StateTypes)
const CapabilityTypesSchema = z.union([
    SensorTypesSchema,
    ActuatorTypesSchema,
    StateTypesSchema,
])

const FurnitureTypesSchema = z.enum(FurnitureTypes)
const EquipmentTypesSchema = z.enum(EquipmentTypes)
const AssetTypesSchema = z.union([FurnitureTypesSchema, EquipmentTypesSchema])

const SpaceTypesSchema = z.enum(SpaceTypes)

const EntityCategorySchema = z.enum(EntityTypes)

// EntitiesStrings = CapabilityTypes | AssetTypes | SpaceTypes
const EntitiesStringsSchema = z.union([
    CapabilityTypesSchema,
    AssetTypesSchema,
    SpaceTypesSchema,
])

// entityConfigRelation = { [key: string]: string[] }
const EntityConfigRelationSchema = z.record(z.string(), z.array(z.string()))

// ---- main schema ----
export const EntityConfigSchema = z.object({
    id: z.string(),
    type: EntityCategorySchema,
    subtype: EntitiesStringsSchema,
    name: z.string(),
    relationships: z.array(EntityConfigRelationSchema),
})

// derive the TS type back from the schema (matches your original interface)
export type EntityConfig = z.infer<typeof EntityConfigSchema>