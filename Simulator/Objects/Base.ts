
import {entityConfig} from "../types.ts";


export class AEntity {
    name: string;
    type: string;
    id: number;

    constructor(config: entityConfig) {
        this.name = config.name || "Device";
        this.type = config.type || "base";
        this.id = config.id;
    }

}
