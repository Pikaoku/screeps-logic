const roleBuilder = require('./role.builder');
const roleHarvester = require('./role.harvester');
const roleUpgrader = require('./role.upgrader');

const ROLE_HARVESTER = 'harvester';
const ROLE_BUILDER = 'builder';
const ROLE_UPGRADER = 'upgrader';

var typeWorker = {
  /** @param {Creep} creep **/
  run: function (creep) {
    const role = creep.memory.role;

    const creepIsFull = creep.store.getFreeCapacity() === 0;
    const creepIsEmpty = creep.store[RESOURCE_ENERGY] === 0;

    if (creep.memory.refueling) {
      console.log('we tryin it');
      let containers = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) =>
          structure.structureType === STRUCTURE_CONTAINER &&
          structure.store[RESOURCE_ENERGY] > 0,
      });
      if (containers.length > 0) {
        console.log('all in');
        creep.withdraw(containers[0], RESOURCE_ENERGY) !== ERR_NOT_IN_RANGE ||
          creep.moveTo(containers[0]);
        if (creep.store.getFreeCapacity() === 0) creep.memory.refueling = false;
        return creep.say('🔋-');
      }
    }

    if (creepIsFull) {
      creep.memory.refueling = false;
    }

    switch (role) {
      case ROLE_HARVESTER:
        roleHarvester.run(creep);
        break;
      case ROLE_BUILDER:
        roleBuilder.run(creep);
        break;
      case ROLE_UPGRADER:
        roleUpgrader.run(creep);
        break;
    }
  },
};

module.exports = typeWorker;
