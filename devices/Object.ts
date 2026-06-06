
export interface Config{
  name: string;
  type: string;
  id: string;
}

export default class AObject {
  name: string;
  type: string;
  id: string;
  
  constructor(config: Config) {
    this.name = config.name || "Device";
    this.type = config.type || "base";
    this.id = config.id;
  }

}
