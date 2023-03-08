export default function listPowTwo1(list: number[]) {
  return list.map((n) => Math.pow(n, 2)).sort((a, b) => a - b);
}
