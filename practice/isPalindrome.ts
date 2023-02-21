/**
 * Написать функцию, которая определяет, является ли переданная строка палиндромом (читается слева-направо и справа-налево одинаково).
 *
 * Примеры палиндромов:
 * - Казак
 * - А роза упала на лапу Азора
 * - Do geese see God?
 * - Madam, I’m Adam
 */

export function isPalindrome(str: string): boolean {
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

export function isPalindrome2(str: string): boolean {
  const normalized = str.replace(/[^a-zа-яё]/gi, '').toLowerCase();

  for (let i = 0, j = normalized.length - 1; i <= j; i++, j--) {
    if (normalized[i] !== normalized[j]) {
      return false;
    }
  }

  return true;
}

export function isPalindrome3(str: string): boolean {
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
