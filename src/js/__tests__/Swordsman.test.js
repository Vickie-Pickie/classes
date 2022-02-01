import Swordsman from '../Swordsman';
import { TYPE_SWORDSMAN } from '../Character';

test('Персонаж Swordsman успешно создается', () => {
  const received = new Swordsman('Алёша');
  const expected = {
    name: 'Алёша',
    type: TYPE_SWORDSMAN,
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
