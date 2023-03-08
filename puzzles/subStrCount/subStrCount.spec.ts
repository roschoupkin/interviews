import first from './subStrCount.first';
import second from './subStrCount.second';

describe('subStrCount', () => {
  test('first', () => {
    expect(first('Hello', 'o')).toBe(1);
    expect(first('Hello', 'l')).toBe(2);
    expect(first('', 'z')).toBe(0);
    expect(first('hello hello help', 'hello')).toBe(2);
    expect(first('hello hello help', 'hel')).toBe(3);
  });

  test('second', () => {
    expect(second('Hello', 'o')).toBe(1);
    expect(second('Hello', 'l')).toBe(2);
    expect(second('', 'z')).toBe(0);
    expect(second('hello hello help', 'hel')).toBe(3);
    expect(second('hello hello help', 'hel')).toBe(3);
  });
});
