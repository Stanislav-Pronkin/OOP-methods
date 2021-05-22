import Character from '../app';
import Bowerman from '../bowerman';

test('Character', () => {
  const character = new Character('Bob', 'Bowerman');

  expect(character).toEqual({
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Bowerman',
  });
});

test('Character', () => {
  expect(() => {
    const character = new Character(123, 'Bowerman');
    return character;
  }).toThrow('Недопустимые символы');
});

test('Character', () => {
  expect(() => {
    const character = new Character('B', 'Bowerman');
    return character;
  }).toThrow('Имя может содержать от 2 до 10 символов');
});

test('Character', () => {
  expect(() => {
    const character = new Character('abcdefgqwert', 'Bowerman');
    return character;
  }).toThrow('Имя может содержать от 2 до 10 символов');
});

test('Character', () => {
  expect(() => {
    const character = new Character('Bob', 'Knight');
    return character;
  }).toThrow('Недопустимый тип');
});

test('levelUp', () => {
  const character = new Bowerman('Bob', 'Bowerman');

  character.levelUp();
  expect(character).toEqual({
    attack: 55,
    defence: 55,
    health: 100,
    level: 2,
    name: 'Bob',
    type: 'Bowerman',
  });
});

test('levelUp', () => {
  const character = new Bowerman('Bob', 'Bowerman');

  character.health = 0;
  expect(() => { character.levelUp(); }).toThrow('нельзя повысить левел умершего');
});

test('levelUp', () => {
  const character = new Bowerman('Bob', 'Bowerman');

  character.health = -5;
  expect(() => { character.levelUp(); }).toThrow('нельзя повысить левел умершего');
});

test('damage', () => {
  const character = new Bowerman('Bob', 'Bowerman');

  character.damage(50);
  expect(character).toEqual({
    attack: 25,
    defence: 25,
    health: 62.5,
    level: 1,
    name: 'Bob',
    type: 'Bowerman',
  });
});

test('damage', () => {
  const character = new Bowerman('Bob', 'Bowerman');

  character.damage(75);
  expect(character).toEqual({
    attack: 25,
    defence: 25,
    health: 43.75,
    level: 1,
    name: 'Bob',
    type: 'Bowerman',
  });
});
