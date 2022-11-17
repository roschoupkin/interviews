import { sumOfNumEqualK1, sumOfNumEqualK2, sumOfNumEqualK3, sumOfNumEqualK4 } from '@practice/sumOfNumEqualK';

describe('Find two numbers from a list that returns k', () => {
  test('base variant', () => {
    expect(sumOfNumEqualK1([-1, 2, 5, 7], 7)).toStrictEqual([2, 5]);
    expect(sumOfNumEqualK1([-3, -1, 0, 2, 6], 6)).toStrictEqual([0, 6]);
    expect(sumOfNumEqualK1([2, 4, 5], 8)).toStrictEqual([]);
    expect(sumOfNumEqualK1([-2, -1, 0, 2], 0)).toStrictEqual([-2, 2]);
  });

  test('with a hashset', () => {
    expect(sumOfNumEqualK2([-1, 2, 5, 7], 7)).toStrictEqual([2, 5]);
    expect(sumOfNumEqualK2([-3, -1, 0, 2, 6], 6)).toStrictEqual([0, 6]);
    expect(sumOfNumEqualK2([2, 4, 5], 8)).toStrictEqual([]);
    expect(sumOfNumEqualK2([-2, -1, 0, 2], 0)).toStrictEqual([-2, 2]);
  });

  test('with a binary search', () => {
    expect(sumOfNumEqualK3([-1, 2, 5, 7], 7)).toStrictEqual([2, 5]);
    expect(sumOfNumEqualK3([-3, -1, 0, 2, 6], 6)).toStrictEqual([0, 6]);
    expect(sumOfNumEqualK3([2, 4, 5], 8)).toStrictEqual([]);
    expect(sumOfNumEqualK3([-2, -1, 0, 2], 0)).toStrictEqual([-2, 2]);
  });

  test('the best solution', () => {
    expect(sumOfNumEqualK4([-1, 2, 5, 7], 7)).toStrictEqual([2, 5]);
    expect(sumOfNumEqualK4([-3, -1, 0, 2, 6], 6)).toStrictEqual([0, 6]);
    expect(sumOfNumEqualK4([2, 4, 5], 8)).toStrictEqual([]);
    expect(sumOfNumEqualK4([-2, -1, 0, 2], 0)).toStrictEqual([-2, 2]);
  });
});
