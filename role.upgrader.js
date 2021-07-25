const roleBuilder = require('./role.builder');

module.exports = {
  /** @param {Creep} creep **/
  run: function (creep) {
    const creepIsEmpty = creep.store[RESOURCE_ENERGY] < 20;
    const creepIsFull = creep.store.getFreeCapacity() == 0;

    const controller = creep.room.controller;

    const canUpgrade = controller.level < 2;
    const canTick = controller.ticksToDowngrade < 2000;

    if (canTick && !creepIsEmpty) {
      creep.upgradeController(controller) !== ERR_NOT_IN_RANGE ||
        creep.moveTo(controller);
      return creep.say('🛠');
    }

    if (canUpgrade && !creepIsEmpty) {
      creep.upgradeController(controller) !== ERR_NOT_IN_RANGE ||
        creep.moveTo(controller);
      return creep.say('🔼');
    }

    if (!canUpgrade && !creepIsEmpty) {
      const targets = creep.room.find(FIND_STRUCTURES, {
        filter: (s) =>
          (s.structureType == STRUCTURE_SPAWN ||
            s.structureType == STRUCTURE_EXTENSION) &&
          s.store.getFreeCapacity(RESOURCE_ENERGY) > 0,
      });
      creep.transfer(targets[0], RESOURCE_ENERGY) !== ERR_NOT_IN_RANGE ||
        creep.moveTo(targets[0]);
      return creep.say('⚡');
    }

    return roleBuilder.run(creep);
  },
};
