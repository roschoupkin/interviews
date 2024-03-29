/**
 Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности, причем n — число, которое передается в качестве аргумента функции.
 fibonacci(3) === 2
 Первые десять чисел выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 */

export default function fibonacci(n: number): number {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
