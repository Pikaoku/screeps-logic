const CreepManager = require('./CreepManager');
const RoomManager = require('./RoomManager');

const instance = null;

module.exports = class Core {
  _roomManager = null;
  _creepManager = null;

  static get() {
    if (!instance) {
      instance = new Core();
    }
    return instance;
  }

  constructor() {
    this._roomManager = RoomManager.get();
    this._creepManager = CreepManager.get();
  }
  process() {
    // const CreepMan
  }

  testData = '';
};
