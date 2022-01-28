import Zombie from '../Zombie';
import { TYPE_ZOMBIE } from '../Character';

test('Персонаж Zombie успешно создается', () => {
  const hero = new Zombie('Алёша');
  expect(hero.name).toBe('Алёша');
  expect(hero.type).toBe(TYPE_ZOMBIE);
  expect(hero.attack).toEqual(25);
  expect(hero.defence).toEqual(25);
});
