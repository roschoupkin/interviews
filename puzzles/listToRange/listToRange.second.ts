export default function listToRange(list: number[]): string {
  const compressed: string[] = [];

  const sorted = list.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    const pivot = sorted[i];

    while (i + 1 < sorted.length && sorted[i + 1] - sorted[i] === 1) {
      i++;
    }

    if (pivot === sorted[i]) {
      compressed.push(pivot.toString());
    } else {
      compressed.push(`${pivot}-${sorted[i]}`);
    }
  }

  return compressed.join(',');
}
