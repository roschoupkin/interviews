/**
  Вывести простые числа от 1 до N
 */

export function getPrimeNumbers(n: number): number[] {
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

export function getPrimeNumbers2(n: number): number[] {
  const a: boolean[] = new Array(n + 1).fill(true);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (a[i]) {
      let j = Math.pow(i, 2);
      while (j <= n) {
        a[j] = false;
        j += i;
      }
    }
  }

  return a.reduce<number[]>((r, v, i) => {
    if (i > 1 && v) {
      r.push(i);
    }
    return r;
  }, []);
}
