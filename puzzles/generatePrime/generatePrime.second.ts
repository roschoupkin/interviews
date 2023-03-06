export default function generatePrime(n: number): number[] {
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
