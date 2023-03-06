import isCorrectBrackets from './isCorrectBrackets';

describe('isCorrectBrackets', () => {
  it('first', () => {
    expect(isCorrectBrackets('(foo)')).toBe(true);
    expect(isCorrectBrackets('(f[o]{o})')).toBe(true);
    expect(isCorrectBrackets('[(){}()()]')).toBe(true);
    expect(isCorrectBrackets('(foo')).toBe(false);
    expect(isCorrectBrackets('{f[o}o]')).toBe(false);
    expect(isCorrectBrackets('()[]{}')).toBe(true);
    expect(isCorrectBrackets('((()(())))')).toBe(true);
    expect(isCorrectBrackets('(]')).toBe(false);
    expect(isCorrectBrackets('([)]')).toBe(false);
  });
});
