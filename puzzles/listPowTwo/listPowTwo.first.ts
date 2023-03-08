export default function listPowTwo(list: number[]) {
  return list.map((n) => Math.pow(n, 2)).sort((a, b) => a - b);
}
