export default function groupAnagrams(list: string[]) {
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
