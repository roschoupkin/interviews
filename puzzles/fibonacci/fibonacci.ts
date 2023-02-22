/**
 Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности, причем n — число, которое передается в качестве аргумента функции.
 fibonacci(3) === 2
 Первые десять чисел выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 */

export function fibonacci(num: number): number {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

export function fibonacci2(num: number): number {
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result[num];
}
