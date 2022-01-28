import { Character, TYPE_ZOMBIE } from './Character';

export default class Zombie extends Character {
  constructor(name) {
    super(name, TYPE_ZOMBIE, 25, 25);
  }
}
