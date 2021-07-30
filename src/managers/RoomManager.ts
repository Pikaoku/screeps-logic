class RoomManager {
  private rooms: Room[] = [];
  private sources: Source[] = [];

  static findSources(room: Room): Source[] {
    return room.find(FIND_SOURCES);
  }

  private populate() {
    const rooms = [];
    const sources = [];

    for (const ref in Game.rooms) {
      const room: Room = Game.rooms[ref];
      rooms.push(room);
      sources.push(...RoomManager.findSources(room));
    }
    this.rooms = rooms;
    this.sources = sources;
  }

  constructor() {
    this.populate();
  }

  public getRooms() {
    return [...this.rooms];
  }

  public getSources() {
    return [...this.sources];
  }
}

export default RoomManager;
