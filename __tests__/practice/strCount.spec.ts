import { strCountByRegExp, strCountFast } from '@practice/strCount';

describe('Find substring count into string', () => {
  it('Should return count of substring into string. RegExp method', () => {
    expect(strCountByRegExp('Hello', 'o')).toBe(1);
    expect(strCountByRegExp('Hello', 'l')).toBe(2);
    expect(strCountByRegExp('', 'z')).toBe(0);
  });
  it('Should return count of substring into string. Fast method', () => {
    expect(strCountFast('Hello', 'o')).toBe(1);
    expect(strCountFast('Hello', 'l')).toBe(2);
    expect(strCountFast('', 'z')).toBe(0);
  });
});
