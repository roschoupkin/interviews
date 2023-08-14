export default function listToRange(list: number[]): string {
  const compressed: string[] = [];

  const normalized = list.sort((a, b) => a - b);

  let leftIndex = -1;

  for (let index = 0; index < normalized.length; index++) {
    if (leftIndex < 0) {
      leftIndex = index;
    }

    const isLast = index + 1 >= normalized.length;

    if (!isLast && normalized[index]! + 1 === normalized[index + 1]!) {
      continue;
    }

    const left = normalized[leftIndex]!;

    if (leftIndex === index) {
      compressed.push(left.toString());
    } else {
      compressed.push([left, normalized[index]].join('-'));
    }

    leftIndex = -1; // Reset leftIndex to be able to set on the next loop
  }

  return compressed.join(',');
}
