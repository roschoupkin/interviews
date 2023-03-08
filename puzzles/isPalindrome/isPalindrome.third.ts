export default function isPalindrome(str: string): boolean {
  const env = {
    start: 0,
    end: str.length - 1,
  };

  const isWord = (c: string) => /[a-zа-яё]/i.test(c);
  const isEqual = (s: string, e: string) => s.toLowerCase() === e.toLowerCase();

  while (env.start < env.end) {
    const end = str[env.end];
    const start = str[env.start];

    if (!isWord(end)) {
      env.end--;
      continue;
    }

    if (!isWord(start)) {
      env.start++;
      continue;
    }

    if (!isEqual(start, end)) {
      return false;
    }

    env.end--;
    env.start++;
  }

  return true;
}
