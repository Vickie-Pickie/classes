import Swordsman from '../Swordsman';
import { TYPE_SWORDSMAN } from '../Character';

test('Персонаж Swordsman успешно создается', () => {
  const hero = new Swordsman('Алёша');
  expect(hero.name).toBe('Алёша');
  expect(hero.type).toBe(TYPE_SWORDSMAN);
  expect(hero.attack).toEqual(40);
  expect(hero.defence).toEqual(10);
});
