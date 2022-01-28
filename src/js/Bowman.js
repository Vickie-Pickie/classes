import { Character, TYPE_BOWMAN } from './Character';

export default class Bowman extends Character {
  constructor(name) {
    super(name, TYPE_BOWMAN, 25, 25);
  }
}
