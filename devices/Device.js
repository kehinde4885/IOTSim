export default class Device {
  constructor(config) {
    this.sendDatatoWS = config.sendOverWebSocket;
    this.timer = null;
    this.isOn = true;
    this.type = config.deviceType;
    this.interval = config.interval;
  }

  startTransmission() {
    //
    if (this.timer) return;

    this.timer = setInterval(() => {
      this.sendDatatoWS({
        category: "device",
        deviceId: this.id,
        value: this.isOn,
        timestamp: Date.now(),
      });
    }, this.interval);
  }

  stop() {
    //used to cleanup the interval function created
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  itemize() {
    return {
      id: this.id,
      isOn: this.isOn,
      type: this.type,
      interval: this.interval,
    };
  }

  togglePower() {
    this.isOn = !this.isOn;
  }
}
