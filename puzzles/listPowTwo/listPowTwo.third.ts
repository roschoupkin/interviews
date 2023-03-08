/**
 Имеем на входе отсортированный по возрастанию список чисел
 Необходимо все значения списка возвести во вторую степень и вернуть в отсортированном по возрастанию виде

  [0, 1, 2] -> [0, 1, 4]
  [-5, -3, 0, 1, 2] -> [0, 1, 2, 9, 25]
  [-5, -3, 0, 1, 2, 6] -> [0, 1, 4, 9, 25, 36]
  [-5, -3, 0, 1, 2, 2, 6] -> [0, 1, 4, 4, 9, 25, 36]
 */

export default function listPowTwo3(list: number[]) {
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
