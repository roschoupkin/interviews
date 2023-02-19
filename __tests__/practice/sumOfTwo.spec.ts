import { sumOfTwo } from '@practice/sumOfTwo';

describe('sumOfTwo', () => {
  test('base variant', () => {
    expect(sumOfTwo([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    expect(sumOfTwo([3, 2, 4], 6)).toStrictEqual([1, 2]);
    expect(sumOfTwo([3, 3], 6)).toStrictEqual([0, 1]);
  });
});
