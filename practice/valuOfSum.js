/**
 * Релизовать метод sum такой, чтобы sum(1)(2, 4)(5, 6, 7, 8) + 1 + sum(1, 4, 5)(0) // 44
 * Вызвать sum я могу даже так sum(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(1) // 1
 * Дополнительных проверок не надо
 */

function sum() {
  const argSum = (arg) => Array.from(arg).reduce((s, n) => s + n, 0);
  let sum = +argSum(arguments);

  function func() {
    sum += argSum(arguments);
    return func;
  }

  func.valueOf = function () {
    return sum;
  };

  return func();
}

sum(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(1); // 1
sum(1)(2, 4)(5, 6, 7, 8); // 33
