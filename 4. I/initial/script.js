class Entity {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }

  move() {
    console.log(`${this.name} moved`);
  }

  attack(targetEntity) {
    console.log(`${this.name} attacked ${targetEntity} for ${this.attackDamage} damage`);
    targetEntity.takeDamage(this.attackDamage);
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Character extends Entity {

}

class Wall extends Entity {
  constructor(name, health) {
    const attackDamage = 0;
    super(name, attackDamage, health);
  }

  move() {
    return null;
  }

  attack() {
    return null;
  }
}

class Turret extends Entity {
  constructor(name, attackDamage) {
    const health = -1;
    super(name, attackDamage, health);
  }

  move() {
    return null;
  }

  attack() {
    return null;
  }
}

const turret = new Turret('Turret', 5);
const character = new Character('Character', 3, 100);
const wall = new Wall('Wall', 200);

turret.attack(character);
character.move();
character.attack(wall);
