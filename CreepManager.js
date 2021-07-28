const { Manager } = require('./Manager');
/** @type {RoomManager.RoomManager} RoomManager */
const { RoomManager } = require('./RoomManager');

module.exports = {
  CreepManager: class CreepManager extends Manager {
    _creeps = [];
    _spawnQueue = [];

    constructor() {
      this._populateCreeps();
    }

    _populateCreeps() {
      const creeps = [];
      for (const ref in Game.creeps) {
        const creep = Game.creeps[ref];
        !!creep ? creeps.push(creep) : delete Memory.creeps[ref];
      }
      this._creeps = creeps;
    }

    getCreepsByRole(role = '') {
      return this._creeps.filter((creep) => creep.memory.role == role);
    }

    process() {
      if (!this._creeps || Game.time % 20 === 0) {
        this._populateCreeps;
      }

      /** @type {Source[]} sources */
      const sources = RoomManager.get().getSources();
      if (this.getCreepsByRole('harvester') < sources.length) {
      }
    }

    calculateRequiredRoles() {
      const roomManager = RoomManager.get();
      const rooms = roomManager.getRooms();
    }

    spawnHarvester() {}
  },
};
