export default function isPalindrome(str: string): boolean {
  const ctx = {
    start: 0,
    end: str.length - 1,
  };

  const isLetter = (c: string) => c.toLowerCase() !== c.toUpperCase();
  const isEqual = (s: string, e: string) => s.toLowerCase() === e.toLowerCase();

  while (ctx.start < ctx.end) {
    const end = str[ctx.end];
    const start = str[ctx.start];

    if (!isLetter(end)) {
      ctx.end--;
    } else if (!isLetter(start)) {
      ctx.start++;
    } else {
      if (!isEqual(start, end)) {
        return false;
      }

      ctx.end--;
      ctx.start++;
    }
  }

  return true;
}
