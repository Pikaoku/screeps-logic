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
      const spawn = creep.room.find(FIND_MY_SPAWNS)[0];
      creep.transfer(spawn) !== ERR_NOT_IN_RANGE || creep.moveTo(spawn);
    }

    return roleBuilder.run(creep);
  },
};
