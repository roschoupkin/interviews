export default function listPowTwo2(list: number[]) {
  let lIndex = 0;
  let rIndex = list.length - 1;

  const result: number[] = [];

  while (lIndex <= rIndex) {
    const left = Math.pow(list[lIndex], 2);
    const right = Math.pow(list[rIndex], 2);

    if (right > left) {
      result.push(right);
      rIndex--;
    } else {
      result.push(left);
      lIndex++;
    }
  }

  return result.reverse();
}
