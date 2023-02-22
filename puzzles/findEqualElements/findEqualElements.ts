/**
  Есть два сортированных массива чисел.
  Числа сортированы, но могут повторяться.
  Нужно написать функцию, которая возвращает новый массив,
  содержащий элементы, которые встречаются в обоих массивах.
 */

export function findEqualElements(a1: number[], a2: number[]): number[] {
  const result: number[] = [];
  const i = { i1: 0, i2: 0 };

  while (i.i1 < a1.length && i.i2 < a2.length) {
    if (a1[i.i1] > a2[i.i2]) {
      i.i2++;
    } else if (a1[i.i1] < a2[i.i2]) {
      i.i1++;
    } else {
      result.push(a1[i.i1]);
      i.i2++;
      i.i1++;
    }
  }

  return result;
}
