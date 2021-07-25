const roleHarvester = require('./role.harvester');

var roleBuilder = {
  /** @param {Creep} creep **/
  run: function (creep) {
    const isEmpty = creep.store[RESOURCE_ENERGY] == 0;
    const isFull = creep.store.getFreeCapacity() == 0;

    const creepIsRefueling = creep.memory.refueling;

    const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    const spawns = creep.room.find(FIND_MY_SPAWNS);
    const sources = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) =>
        structure.prototype === STRUCTURE_CONTAINER &&
        structure.store[RESOURCE_ENERGY] > 0,
    });

    const canBuild = !isEmpty && targets.length > 0 && !creepIsRefueling;

    const structuresToRepair = creep.room
      .find(FIND_STRUCTURES, {
        filter: (object) => object.hits < object.hitsMax,
      })
      .sort((a, b) => a.hits - b.hits);

    const canRepair = !isEmpty && structuresToRepair.length > 0;

    if (isEmpty || (!isFull && !canBuild)) {
      creep.say('❌');
      return (creep.memory.refueling = true);
    }

    if (canRepair) {
      if (creep.repair(structuresToRepair[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(structuresToRepair[0]);
      }
    }

    if (canBuild) {
      creep.build(targets[0]) !== ERR_NOT_IN_RANGE || creep.moveTo(targets[0]);
      return creep.say('👷‍♂️');
    }

    return roleHarvester.run(creep);
  },
};

module.exports = roleBuilder;
