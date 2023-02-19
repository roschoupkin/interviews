/**
 Дан список неотрицательных целых чисел, повторяющихся элементов в списке нет.
 Нужно преобразовать его в строку, сворачивая соседние по числовому ряду числа в диапазоны.
 */

export function compressList(list: number[]): string {
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

export function compressList2(list: number[]): string {
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
