export default function extractEquals(a1: number[], a2: number[]): number[] {
  const result: number[] = [];
  const indexes = { i1: 0, i2: 0 };

  while (indexes.i1 < a1.length && indexes.i2 < a2.length) {
    if (a1[indexes.i1] > a2[indexes.i2]) {
      indexes.i2++;
    } else if (a1[indexes.i1] < a2[indexes.i2]) {
      indexes.i1++;
    } else {
      result.push(a1[indexes.i1]);
      indexes.i2++;
      indexes.i1++;
    }
  }

  return result;
}
