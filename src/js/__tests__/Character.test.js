import { Character, TYPE_SWORDSMAN } from '../Character';

test.each([
  ['a', TYPE_SWORDSMAN],
  ['asdfdfdgfjdghfufgjf', TYPE_SWORDSMAN],
  ['Ivan', 'TYPE_ROGUE'],
])(
  'Нельзя создать персонажа с именем %s и типом %s',
  (name, type) => {
    expect(() => new Character(name, type, 25, 30)).toThrowError(Error);
  },
);

test('Персонаж с правильными параметрами успешно создается', () => {
  const hero = new Character('Ivan', TYPE_SWORDSMAN, 10, 20);
  expect(hero.name).toBe('Ivan');
  expect(hero.type).toBe(TYPE_SWORDSMAN);
  expect(hero.level).toEqual(1);
  expect(hero.attack).toEqual(10);
  expect(hero.defence).toEqual(20);
  expect(hero.health).toEqual(100);
});

test('levelUp не работает для мертвого персонажа', () => {
  const hero = new Character('Ivan', TYPE_SWORDSMAN, 10, 20);
  hero.health = 0;
  expect(() => hero.levelUp()).toThrowError(Error);
});

test.each([
  [1, 10, 20, 40],
  [10, 50, 40, 100],
])(
  'levelUp для Персонажа с уровнем %i с атакой %i, защитой %i и hp %i',
  (level, attack, defence, health) => {
    const hero = new Character('Ivan', TYPE_SWORDSMAN, attack, defence);
    hero.health = health;
    hero.level = level;
    hero.levelUp();
    expect(hero.level).toEqual(level + 1);
    expect(hero.attack).toEqual(attack * 1.2);
    expect(hero.defence).toEqual(defence * 1.2);
    expect(hero.health).toEqual(100);
  },
);

test('damage не работает для мертвого персонажа', () => {
  const hero = new Character('Ivan', TYPE_SWORDSMAN, 10, 20);
  hero.health = 0;
  expect(() => hero.damage(10)).toThrowError(Error);
});

test.each([
  [50, 10, 10 * (1 - 50 / 100)],
  [20, 10, 10 * (1 - 20 / 100)],
  [20, 20, 20 * (1 - 20 / 100)],
])(
  'Персонаж с защитой %i, получая %i урона теряет %i здоровья',
  (defence, points, damage) => {
    const hero = new Character('Ivan', TYPE_SWORDSMAN, 20, defence);
    hero.damage(points);
    expect(hero.health).toEqual(100 - damage);
  },
);
