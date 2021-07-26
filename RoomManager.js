const instance = null;

module.exports = class RoomManager {
  _rooms = [];
  _sources = [];

  static get() {
    if (!instance) {
      instance = new RoomManager();
    }
    return instance;
  }

  /**
   * @param {Room} room
   * @returns {Source[]}
   * */
  static getSources(room) {
    return room.find(FIND_SOURCES);
  }

  constructor() {
    const rooms = [];
    const sources = [];

    for (const ref in Game.rooms) {
      const room = Game.rooms[ref];
      rooms.push(room);
      sources.push(...RoomManager.getSources(room));
    }
    this._rooms = rooms;
    this._sources = sources;
  }

  getRooms() {
    return [...this._rooms];
  }
};
