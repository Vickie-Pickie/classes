import Bowman from '../Bowman';
import { TYPE_BOWMAN } from '../Character';

test('Персонаж Bowman успешно создается', () => {
  const hero = new Bowman('Леголас');
  expect(hero.name).toBe('Леголас');
  expect(hero.type).toBe(TYPE_BOWMAN);
  expect(hero.attack).toEqual(25);
  expect(hero.defence).toEqual(25);
});
