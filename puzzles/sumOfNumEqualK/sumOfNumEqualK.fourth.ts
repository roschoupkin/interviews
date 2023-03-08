export default function sumOfNumEqualK(nums: number[], k: number): number[] {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum === k) {
      return [nums[l], nums[r]];
    }
    if (sum < k) {
      l++;
    } else {
      r--;
    }
  }
  return [];
}
