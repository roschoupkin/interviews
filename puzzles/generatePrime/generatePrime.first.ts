/**
  Вывести простые числа от 1 до N
 */

export default function generatePrime(n: number): number[] {
  const result: number[] = [];

  const isPrime = (i: number) => {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result;
}
