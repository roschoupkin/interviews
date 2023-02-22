import { strCountByRegExp, strCountFast } from './strCount';

describe('Find substring count into string', () => {
  it('Should return count of substring into string. RegExp method', () => {
    expect(strCountByRegExp('Hello', 'o')).toBe(1);
    expect(strCountByRegExp('Hello', 'l')).toBe(2);
    expect(strCountByRegExp('', 'z')).toBe(0);
    expect(strCountByRegExp('hello hello help', 'hello')).toBe(2);
    expect(strCountByRegExp('hello hello help', 'hel')).toBe(3);
  });
  it('Should return count of substring into string. Fast method', () => {
    expect(strCountFast('Hello', 'o')).toBe(1);
    expect(strCountFast('Hello', 'l')).toBe(2);
    expect(strCountFast('', 'z')).toBe(0);
    expect(strCountFast('hello hello help', 'hel')).toBe(3);
    expect(strCountFast('hello hello help', 'hel')).toBe(3);
  });
});
