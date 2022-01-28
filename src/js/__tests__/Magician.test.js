import Magician from '../Magician';
import { TYPE_MAGICIAN } from '../Character';

test('Персонаж Magician успешно создается', () => {
  const hero = new Magician('Алёша');
  expect(hero.name).toBe('Алёша');
  expect(hero.type).toBe(TYPE_MAGICIAN);
  expect(hero.attack).toEqual(10);
  expect(hero.defence).toEqual(40);
});
