class Util {
  public static isNthTick(ticks: number) {
    return Game.time % ticks === 0;
  }
}

export default Util;
