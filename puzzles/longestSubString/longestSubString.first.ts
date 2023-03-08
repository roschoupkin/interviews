export default function longestSubString(str: string): number {
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
