import { Character, TYPE_SWORDSMAN } from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, TYPE_SWORDSMAN, 40, 10);
  }
}
