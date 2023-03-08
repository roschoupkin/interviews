export default function sumOfNumEqualK(nums: number[], k: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k) {
        return [nums[i], nums[j]];
      }
    }
  }
  return [];
}
