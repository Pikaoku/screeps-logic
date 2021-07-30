import { Role } from "types/enums";
import Util from "utils/Util";
import Core from "./Core";

export class CreepManager {
  private creeps: Creep[] = [];
  private spawnQueue: string[] = [];

  private populate() {
    const creeps = [];
    for (const ref in Game.creeps) {
      const creep = Game.creeps[ref];
      !!creep ? creeps.push(creep) : delete Memory.creeps[ref];
    }
    this.creeps = creeps;
  }

  public getCreepsByRole(role: Role) {
    return this.creeps.filter(creep => creep.memory.role == role);
  }

  public process() {
    const hasCreeps = !!this.creeps && this.creeps.length > 0;
    if (!hasCreeps || Util.isNthTick(20)) this.populate();

    /** @type {Source[]} sources */
    // const sources = Core.get().getSources();
    const sources = Core.get().roomManager.getSources();
    const harvesters = Core.get().creepManager.getCreepsByRole(Role.Harvester);
    // const harvesterSpawnQueued = this.spawnQueue.some()
    if (harvesters.length < sources.length) {
    }
  }
}
