import { HVAC } from "./Hvac.js";
import { Fan } from "./Fan.js";
import { ALARM } from "./Alarm.js";
import { Window } from "./Window.js";
import { Door } from "./Door.js";

export const DeviceRegistry = {
  HVAC: {
    class: HVAC,
    //Dependencies
    //Object Literal
    inject: (manager) => ({
      changeAmbientTempFunction: (change) =>
        manager.envManager.changeAmbientTemperature(change),
    }),
  },

  FAN: {
    class: Fan,
    inject: () => ({}),
  },

  ALARM: {
    class: ALARM,
    inject: () => ({}),
  },

  WINDOW: {
    class: Window,
    inject: () => ({}),
  },
  DOOR: {
    class: Door,
    inject: () => ({}),
  },
};
