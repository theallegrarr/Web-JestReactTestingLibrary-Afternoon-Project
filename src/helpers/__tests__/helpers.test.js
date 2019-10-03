import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  // write tests! <================================================
  it('can multiply numbers', () => {
    expect(helpers.multiply(2, 3)).toBe(6);
    expect(helpers.multiply(4, 3)).toBe(12);
    expect(helpers.multiply(1, 3)).toBe(3);
  });

  it('will not accept strings', () => {
    expect(() => helpers.multiply('aim', 'foo')).toThrow();
    expect(() => helpers.multiply('1', '27')).toThrow();
    expect(() => helpers.multiply('*', '---')).toThrow();
  });

  it('will multiply negative numbers', () => {
    expect(helpers.multiply(-1, 10)).toBe(-10);
    expect(helpers.multiply(-5, -5)).toBe(25);
    expect(helpers.multiply(3, -21)).toBe(-63);
  });
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 4,
      });
  });

  // write more tests! <===========================================
  it('object should have id, name and age', () => {
    expect(helpers.personMaker('peter', 4)).toHaveProperty('name')
    expect(helpers.personMaker('ron', 4)).toHaveProperty('age')
    expect(helpers.personMaker('feb', 4)).toHaveProperty('id')
  });
});
