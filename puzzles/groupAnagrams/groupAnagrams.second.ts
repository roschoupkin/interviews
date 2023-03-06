export default function groupAnagrams(input: string[]): string[][] {
  const dict: Record<string, string[]> = {};

  for (const s of input) {
    const sorted = s.split('').sort().join('');
    if (sorted in dict) {
      dict[sorted].push(s);
    } else {
      dict[sorted] = [s];
    }
  }

  return Object.values(dict);
}
