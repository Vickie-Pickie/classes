export const TYPE_BOWMAN = 'Bowman';
export const TYPE_SWORDSMAN = 'Swordsman';
export const TYPE_MAGICIAN = 'Magician';
export const TYPE_DAEMON = 'Daemon';
export const TYPE_UNDEAD = 'Undead';
export const TYPE_ZOMBIE = 'Zombie';
export const availableTypes = [
  TYPE_BOWMAN, TYPE_SWORDSMAN, TYPE_MAGICIAN, TYPE_DAEMON, TYPE_UNDEAD, TYPE_ZOMBIE,
];

export class Character {
  constructor(name, type, attack, defence) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }

    if (!availableTypes.includes(type)) {
      throw new Error('Недопустимый тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('персонаж умер');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('мертвых не бьют');
    }

    this.health -= points * (1 - this.defence / 100);
  }
}
