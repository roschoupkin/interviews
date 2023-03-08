export default function sumOfTwo(nums: number[], k: number): [number, number] {
  const store: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = k - nums[i];

    if (store[diff] != null) {
      return [store[diff], i];
    }

    store[nums[i]] = i;
  }

  return [0, 0];
}
