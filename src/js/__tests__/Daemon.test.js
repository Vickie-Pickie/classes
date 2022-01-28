import Daemon from '../Daemon';
import { TYPE_DAEMON } from '../Character';

test('Персонаж Daemon успешно создается', () => {
  const hero = new Daemon('Алёша');
  expect(hero.name).toBe('Алёша');
  expect(hero.type).toBe(TYPE_DAEMON);
  expect(hero.attack).toEqual(10);
  expect(hero.defence).toEqual(40);
});
