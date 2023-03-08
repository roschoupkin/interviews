export default function sumOfNumEqualK(nums: number[], k: number): number[] {
  const set = new Set<number>();
  for (const num of nums) {
    const numberToFind = k - num;
    if (set.has(numberToFind)) {
      return [numberToFind, num];
    }
    set.add(num);
  }
  return [];
}
