/**
 * Релизовать метод sum такой, чтобы sum(1)(2, 4)(5, 6, 7, 8) + 1 + sum(1, 4, 5)(0) // 44
 * Вызвать sum я могу даже так sum(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(1) // 1
 * Дополнительных проверок не надо
 */

interface Func {
  (...values: number[]): Func;
  valueOf(): number;
}

export function sum(...initial: number[]): Func {
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
