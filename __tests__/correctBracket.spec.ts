import { isValid } from '@practice/correctBracket';

describe('Correct brackets', () => {
  it('Should check correct brackets', () => {
    expect(isValid('(foo)')).toBeTruthy();
    expect(isValid('(f[o]{o})')).toBeTruthy();
    expect(isValid('[(){}()()]')).toBeTruthy();
    expect(isValid('(foo')).toBeFalsy();
    expect(isValid('{f[o}o]')).toBeFalsy();
    expect(isValid('()[]{}')).toBeTruthy();
    expect(isValid('((()(())))')).toBeTruthy();
    expect(isValid('(]')).toBeFalsy();
    expect(isValid('([)]')).toBeFalsy();
  });
});
