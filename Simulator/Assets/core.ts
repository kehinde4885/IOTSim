import {Entity,EntityFactory} from "../Core/entity.ts";

export abstract class Asset extends Entity{
    abstract serialNumber: string;
   
    
}

export abstract class Equipment extends Asset{
    
}


export const EquipmentFactory = new EntityFactory<Equipment>()