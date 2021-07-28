/** @module Manager */

/**
 * A hash of all active instances that allows the instances to be re-loaded
 * rather than re-created to maintain state.
 */
const instances = null;

module.exports = {
  // Singleton pattern to grab managers from various parts of the game loop
  Manager: class Manager {
    /** @returns {this} */
    static get() {
      if (!instances[this.name]) {
        instances[this.name] = new this();
      }
      return instances[this.name];
    }
  },
};
