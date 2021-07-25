const {
  TYPE_WORKER,
  TYPE_COMBAT,
  ROLE_HARVESTER,
  ROLE_BUILDER,
  ROLE_UPGRADER,
} = require('./constants');

var creepBuilder = {
  /**
   * @param {StructureSpawn} spawn
   * @param {String} name
   **/
  buildHarvester: function (spawn, name) {
    return spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE], name, {
      memory: {
        role: ROLE_HARVESTER,
        type: TYPE_WORKER,
      },
    });
  },
  /**
   * @param {StructureSpawn} spawn
   * @param {String} name
   **/
  buildBuilder: (spawn, name) => {
    return spawn.spawnCreep(
      [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE],
      name,
      {
        memory: {
          role: ROLE_BUILDER,
          type: TYPE_WORKER,
        },
      }
    );
  },
  /**
   * @param {StructureSpawn} spawn
   * @param {String} name
   **/
  buildUpgrader: (spawn, name) => {
    return spawn.spawnCreep([WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], name, {
      memory: {
        role: ROLE_UPGRADER,
        type: TYPE_WORKER,
      },
    });
  },
};

module.exports = creepBuilder;
