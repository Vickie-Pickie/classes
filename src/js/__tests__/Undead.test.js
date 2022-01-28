import Undead from '../Undead';
import { TYPE_UNDEAD } from '../Character';

test('Персонаж Undead успешно создается', () => {
  const hero = new Undead('Алёша');
  expect(hero.name).toBe('Алёша');
  expect(hero.type).toBe(TYPE_UNDEAD);
  expect(hero.attack).toEqual(25);
  expect(hero.defence).toEqual(25);
});
