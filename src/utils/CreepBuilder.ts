class CreepBuilder {
  private build: BodyPartConstant[] = [];

  private addPart(type: BodyPartConstant, number: number = 1) {
    if (number > 0) this.make(...Array(number).fill(type));
    return this;
  }

  private make(...parts: BodyPartConstant[]) {
    this.build = [...this.build, ...parts];
    return this;
  }

  public finish() {
    return this.build;
  }

  public attack(number: number = 1) {
    return this.addPart("attack", number);
  }

  public carry(number: number = 1) {
    return this.addPart("carry", number);
  }

  public claim(number: number = 1) {
    return this.addPart("claim", number);
  }

  public heal(number: number = 1) {
    return this.addPart("heal", number);
  }

  public move(number: number = 1) {
    return this.addPart("move", number);
  }

  public ranged_attacik(number: number = 1) {
    return this.addPart("ranged_attack", number);
  }

  public tough(number: number = 1) {
    return this.addPart("tough", number);
  }

  public work(number: number = 1) {
    return this.addPart("work", number);
  }
}
export default CreepBuilder;
