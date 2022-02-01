import Daemon from '../Daemon';
import { TYPE_DAEMON } from '../Character';

test('Персонаж Daemon успешно создается', () => {
  const received = new Daemon('Алёша');
  const expected = {
    name: 'Алёша',
    type: TYPE_DAEMON,
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
