import Magician from '../Magician';
import { TYPE_MAGICIAN } from '../Character';

test('Персонаж Magician успешно создается', () => {
  const received = new Magician('Алёша');
  const expected = {
    name: 'Алёша',
    type: TYPE_MAGICIAN,
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
