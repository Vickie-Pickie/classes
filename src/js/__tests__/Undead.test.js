import Undead from '../Undead';
import { TYPE_UNDEAD } from '../Character';

test('Персонаж Undead успешно создается', () => {
  const received = new Undead('Алёша');
  const expected = {
    name: 'Алёша',
    type: TYPE_UNDEAD,
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
