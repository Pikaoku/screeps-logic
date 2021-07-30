module.exports = {
  /** @param {Creep} creep **/
  run: function (creep) {
    const creepIsFull = creep.store.getFreeCapacity() === 0;
    const creepIsEmpty = creep.store[RESOURCE_ENERGY] === 0;

    const sources = creep.room.find(FIND_SOURCES);
    const containers = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) =>
        (structure.structureType == STRUCTURE_CONTAINER ||
          structure.structureType == STRUCTURE_SPAWN) &&
        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0,
    });

    const canDeposit = !creepIsEmpty && containers.length > 0;
    const canHarvest = !creepIsFull && sources.length > 0;

    if (canHarvest) {
      const target = creep.pos.findClosestByPath(sources);
      creep.harvest(target) !== ERR_NOT_IN_RANGE || creep.moveTo(target);
      return creep.say('⛏');
    }

    if (canDeposit) {
      const target = creep.pos.findClosestByPath(containers);
      creep.transfer(target, RESOURCE_ENERGY) !== ERR_NOT_IN_RANGE ||
        creep.moveTo(target);
      return creep.say('🔋+');
    }
  },
};
