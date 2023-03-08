export default function listPowTwo(list: number[]) {
  let lIndex = 0;
  let rIndex = list.length - 1;

  let index = list.length - 1;

  const result: number[] = new Array(list.length).fill(0);

  while (index >= 0) {
    const left = Math.pow(list[lIndex], 2);
    const right = Math.pow(list[rIndex], 2);

    if (right > left) {
      result[index] = right;
      rIndex--;
    } else {
      result[index] = left;
      lIndex++;
    }
    index--;
  }

  return result;
}
