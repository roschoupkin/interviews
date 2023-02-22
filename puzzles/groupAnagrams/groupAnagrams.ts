/**
  Дан массив строк, нужно сгруппировать в нем анаграммы.
  Важно, что это нужно сделать максимально эффективно по памяти и времени.
  Слово X является анаграммой слова Y, если оно может быть
  получено из другого перестановкой букв.
*/

export function groupAnagrams(list: string[]) {
  const map = new Map();
  return list.reduce<string[][]>((result, word) => {
    const sorted = word.split('').sort().join('');

    if (map.has(sorted)) {
      result[map.get(sorted)].push(word);
    } else {
      map.set(sorted, result.push([word]) - 1);
    }

    return result;
  }, []);
}

export function groupAnagrams2(input: string[]): string[][] {
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
