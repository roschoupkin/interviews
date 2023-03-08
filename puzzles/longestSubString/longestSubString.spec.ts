import first from './longestSubString.first';
import second from './longestSubString.second';

describe('longestSubString', () => {
  it('first', () => {
    expect(first('abcabcbb')).toBe(3);
    expect(first('bbbbb')).toBe(1);
    expect(first('zabcade')).toBe(5);
    expect(first('abcdebaabcdefg')).toBe(7);
  });

  it('second', () => {
    expect(second('abcabcbb')).toBe(3);
    expect(second('bbbbb')).toBe(1);
    expect(second('zabcade')).toBe(5);
    expect(second('abcdebaabcdefg')).toBe(7);
  });
});
