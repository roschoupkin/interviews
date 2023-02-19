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
