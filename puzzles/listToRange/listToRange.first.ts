export default function listToRange(list: number[]): string {
  if (!list.length) {
    return '';
  }

  const sorted = list.sort((a, b) => a - b);

  let hasInterval = false;
  const compressed: string[] = [sorted[0].toString()];

  for (let i = 1; i <= sorted.length; i++) {
    const current = sorted[i];
    const prev = sorted[i - 1];

    if (current != null && current - prev === 1) {
      hasInterval = true;
      continue;
    }

    if (hasInterval) {
      compressed[compressed.length - 1] += '-' + prev;
      hasInterval = false;
    }

    if (current != null) {
      compressed.push(current.toString());
    }
  }

  return compressed.join(',');
}
