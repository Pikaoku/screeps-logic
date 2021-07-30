import { Role } from "types/enums";
import CreepBuilder from "utils/CreepBuilder";

export default class SpawnManager {
  static spawn(
    spawn: StructureSpawn,
    role: Role,
    name: string,
    opts: SpawnOptions = {}
  ) {
    // return spawn.spawnCreep(CreepTemplates[role][strength], name, opts);
  }

  public static harvester() {
    return new CreepBuilder().work(5).move(5).carry(2);
  }

  public static builder() {
    return new CreepBuilder().work(4).move(4).carry(4);
  }

  public static upgrader() {
    return new CreepBuilder().work(2).move(8).carry(2);
  }
}
