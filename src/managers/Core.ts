import { CreepManager } from "./CreepManager";
import RoomManager from "./RoomManager";

class Core {
  // Reference to the singleton pattern
  private static instance: Core;

  public roomManager: RoomManager;
  public creepManager: CreepManager;

  private constructor() {
    // Load Order is Important! 
    this.creepManager = new CreepManager();
    this.roomManager = new RoomManager();
  }

  // Implements the singleton pattern
  public static get(): Core {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }

  public process() {
    // const CreepMan
  }
}

export default Core;
