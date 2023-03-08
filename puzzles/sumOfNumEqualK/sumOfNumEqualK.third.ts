export default function sumOfNumEqualK(nums: number[], k: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const numberToFind = k - nums[i];
    let l = i + 1,
      r = nums.length - 1;
    while (l <= r) {
      const mid = Math.floor(l + (r - l) / 2);
      if (nums[mid] === numberToFind) {
        return [nums[i], nums[mid]];
      }
      if (numberToFind < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return [];
}
