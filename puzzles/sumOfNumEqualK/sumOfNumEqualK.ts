/*
  Написать метод, который находит сумму двух числе из отсортированного списка, равное переменной k.
  На вход принимается искомая сумма k и отсортированный список чисел, на вывод массив их этих двух чисел.
  Примеры:
  [-1, 2, 5, 8]; k = 7; // [2, 5]
  [-3, -1, 0, 2, 6]; k = 6; // [0, 6]
  [2, 4, 5]; k = 8; // []
  [-2, -1, 1, 2]; k = 0; // [-2, 2]
 */

// Memory: O(1); Time: O(n^2)
export function sumOfNumEqualK1(nums: number[], k: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k) {
        return [nums[i], nums[j]];
      }
    }
  }
  return [];
}

// Memory: O(n); Time: O(n)
export function sumOfNumEqualK2(nums: number[], k: number): number[] {
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

// Memory: O(1); Time: O(n log n)
export function sumOfNumEqualK3(nums: number[], k: number): number[] {
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

// Memory: O(1); Time: O(n)
export function sumOfNumEqualK4(nums: number[], k: number): number[] {
  let l = 0,
    r = nums.length - 1;
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
