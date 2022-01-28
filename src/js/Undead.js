import { Character, TYPE_UNDEAD } from './Character';

export default class Undead extends Character {
  constructor(name) {
    super(name, TYPE_UNDEAD, 25, 25);
  }
}
