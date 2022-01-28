import { Character, TYPE_DAEMON } from './Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, TYPE_DAEMON, 10, 40);
  }
}
