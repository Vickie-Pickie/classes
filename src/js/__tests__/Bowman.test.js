import Bowman from '../Bowman';
import { TYPE_BOWMAN } from '../Character';

test('Персонаж Bowman успешно создается', () => {
  const received = new Bowman('Леголас');
  const expected = {
    name: 'Леголас',
    type: TYPE_BOWMAN,
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
