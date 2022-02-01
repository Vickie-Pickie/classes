import Zombie from '../Zombie';
import { TYPE_ZOMBIE } from '../Character';

test('Персонаж Zombie успешно создается', () => {
  const received = new Zombie('Алёша');
  const expected = {
    name: 'Алёша',
    type: TYPE_ZOMBIE,
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
