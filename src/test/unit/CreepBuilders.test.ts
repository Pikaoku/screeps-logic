import CreepBuilder from "../../utils/CreepBuilder";

describe("CreepBuilder", function () {
  describe("always builds an array", () => {
    it("should have a valid array for zero inputs", () => {
      const build = new CreepBuilder().finish();
      expect(build).toBeInstanceOf(Array);
      expect(build).toEqual([]);
    });
    it("returns an array no matter how many parts are added", () => {
      const build = new CreepBuilder().attack(50).move(50).finish();
      expect(build).toBeInstanceOf(Array);
      expect(build.length).toEqual(100);
    });
    it("can handle bad inputs", () => {
      const build = new CreepBuilder().attack(-1).finish();
      expect(build).toBeInstanceOf(Array);
      expect(build.length).toEqual(0);
    });
  });
});
