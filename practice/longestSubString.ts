/**
  Дана строка, найти длину наибольшей подстроки, состоящей из уникальных символов.
  Строка может содержать только маленькие буквы английского алфавита.
 "abcdabc" → 4 ("abcd")
 */

export function longestSubString(str: string): number {
  let longest = 0;
  let substring = '';

  for (const char of str) {
    if (!substring.includes(char)) {
      substring += char;
    } else {
      substring = substring.slice(substring.indexOf(char) + 1) + char;
    }
    longest = Math.max(longest, substring.length);
  }

  return longest;
}
