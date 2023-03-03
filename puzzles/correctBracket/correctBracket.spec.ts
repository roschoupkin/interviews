import { isValid } from './correctBracket';

describe('Correct brackets', () => {
  it('Should check correct brackets', () => {
    expect(isValid('(foo)')).toBe(true);
    expect(isValid('(f[o]{o})')).toBe(true);
    expect(isValid('[(){}()()]')).toBe(true);
    expect(isValid('(foo')).toBe(false);
    expect(isValid('{f[o}o]')).toBe(false);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('((()(())))')).toBe(true);
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
  });
});
