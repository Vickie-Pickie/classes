import { Character, TYPE_MAGICIAN } from './Character';

export default class Magician extends Character {
  constructor(name) {
    super(name, TYPE_MAGICIAN, 10, 40);
  }
}
