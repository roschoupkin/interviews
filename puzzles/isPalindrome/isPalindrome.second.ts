export default function isPalindrome(str: string): boolean {
  const normalized = str.replace(/[^a-zа-яё]/gi, '').toLowerCase();

  for (let i = 0, j = normalized.length - 1; i <= j; i++, j--) {
    if (normalized[i] !== normalized[j]) {
      return false;
    }
  }

  return true;
}
