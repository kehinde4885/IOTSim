import {Sensor} from "../core.ts";

export class TempSensor extends Sensor{
    read(): { type: string; value: number } {
        return {type: "Temp sensor", value: 99}
    }

}