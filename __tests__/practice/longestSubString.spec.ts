import { longestSubString, longestSubString2 } from '@practice/longestSubString';

describe('Longest substring', () => {
  it('Should return size of longest substring', () => {
    expect(longestSubString('abcabcbb')).toBe(3);
    expect(longestSubString('bbbbb')).toBe(1);
    expect(longestSubString('zabcade')).toBe(5);
    expect(longestSubString('abcdebaabcdefg')).toBe(7);
  });

  it('Should return size of longest substring', () => {
    expect(longestSubString2('abcabcbb')).toBe(3);
    expect(longestSubString2('bbbbb')).toBe(1);
    expect(longestSubString2('zabcade')).toBe(5);
    expect(longestSubString2('abcdebaabcdefg')).toBe(7);
  });
});
