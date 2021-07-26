const instance = null;

module.exports = class CreepManager {
  static get() {
    if (!instance) {
      instance = new CreepManager();
    }
    return instance;
  }

  _creeps = [];

  constructor() {
    const creeps = [];
    for (const ref in Game.creeps) {
      const creep = Game.creeps[ref];
      creeps.push(creep);
    }
    this._creeps = creeps;
  }
};
