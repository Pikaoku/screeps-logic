/** @module RoomManager */

const Manager = require('./Manager');

module.exports = {
  /**
   *
   */
  RoomManager: class RoomManager extends Manager {
    _rooms = [];
    _sources = [];

    /**
     * @param {Room} room
     * @returns {Source[]}
     * */
    static findSources(room) {
      return room.find(FIND_SOURCES);
    }

    constructor() {
      const rooms = [];
      const sources = [];
      for (const ref in Game.rooms) {
        const room = Game.rooms[ref];
        rooms.push(room);
        sources.push(...RoomManager.findSources(room));
      }
      this._rooms = rooms;
      this._sources = sources;
    }

    getRooms() {
      return [...this._rooms];
    }

    getSources() {
      return [...this._sources];
    }
  },
};
