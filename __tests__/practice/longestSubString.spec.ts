import { longestSubString } from '@practice/longestSubString';

describe('Longest substring', () => {
  it('Should return size of longest substring', () => {
    expect(longestSubString('abcabcbb')).toBe(3);
    expect(longestSubString('bbbbb')).toBe(1);
    expect(longestSubString('zabcade')).toBe(5);
    expect(longestSubString('abcdebaabcdefg')).toBe(7);
  });
});
