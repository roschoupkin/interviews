// Есть массив чисел nums и число target
// Требуется вернуть индексы двух чисел из nums, сумма которых равна target

export function sumOfTwo(nums: number[], target: number): [number, number] {
  const store: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (store[diff] != null) {
      return [store[diff], i];
    }

    store[nums[i]] = i;
  }

  return [0, 0];
}
