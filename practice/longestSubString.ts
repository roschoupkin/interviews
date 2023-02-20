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

export function longestSubString2(input: string): number {
  let longest = 0;
  const store: string[] = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const last = store.indexOf(char);

    if (last >= 0) {
      store.splice(0, last + 1);
    }

    longest = Math.max(longest, store.push(char));
  }

  return longest;
}
