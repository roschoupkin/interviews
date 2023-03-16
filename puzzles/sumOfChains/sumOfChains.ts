interface Func {
  (...values: number[]): Func;
  valueOf(): number;
}

export default function sumOfChains(...initial: number[]): Func {
  const argSum = (numbers: ArrayLike<number>) => Array.from(numbers).reduce((s, n) => s + n, 0);

  let total = argSum(initial);

  function func(...values: number[]) {
    total += argSum(values);
    return func;
  }

  func.valueOf = function () {
    return total;
  };

  return func;
}
