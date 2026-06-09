
import {entityConfig} from "../types.ts";


export class AEntity {
    name: string;
    type: string;
    id: string;
    relationships?: Map<K,V>;

    constructor(config: entityConfig) {
        this.name = config.name || "Device";
        this.type = config.type || "base";
        this.id = config.id;
        
        this.relationships = new Map();
        
       

        config.relationships?.forEach((relationship) => {
            const relSet = new Set()
            //console.log(`base `,Object.keys(relationship)[0])
            
            //loop here
            Object.values(relationship)[0].forEach((item)=>{
               relSet.add(item)
            })     
            
            this.relationships.set(Object.keys(relationship)[0],relSet)
            
        })
        
        
    }

}
