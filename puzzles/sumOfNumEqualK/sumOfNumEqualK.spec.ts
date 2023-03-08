import first from './sumOfNumEqualK.first';
import second from './sumOfNumEqualK.second';
import third from './sumOfNumEqualK.third';
import fourth from './sumOfNumEqualK.fourth';

describe('sumOfNumEqualK', () => {
  test('first', () => {
    expect(first([-1, 2, 5, 7], 7)).toStrictEqual([2, 5]);
    expect(first([-3, -1, 0, 2, 6], 6)).toStrictEqual([0, 6]);
    expect(first([2, 4, 5], 8)).toStrictEqual([]);
    expect(first([-2, -1, 0, 2], 0)).toStrictEqual([-2, 2]);
  });

  test('second', () => {
    expect(second([-1, 2, 5, 7], 7)).toStrictEqual([2, 5]);
    expect(second([-3, -1, 0, 2, 6], 6)).toStrictEqual([0, 6]);
    expect(second([2, 4, 5], 8)).toStrictEqual([]);
    expect(second([-2, -1, 0, 2], 0)).toStrictEqual([-2, 2]);
  });

  test('third', () => {
    expect(third([-1, 2, 5, 7], 7)).toStrictEqual([2, 5]);
    expect(third([-3, -1, 0, 2, 6], 6)).toStrictEqual([0, 6]);
    expect(third([2, 4, 5], 8)).toStrictEqual([]);
    expect(third([-2, -1, 0, 2], 0)).toStrictEqual([-2, 2]);
  });

  test('fourth', () => {
    expect(fourth([-1, 2, 5, 7], 7)).toStrictEqual([2, 5]);
    expect(fourth([-3, -1, 0, 2, 6], 6)).toStrictEqual([0, 6]);
    expect(fourth([2, 4, 5], 8)).toStrictEqual([]);
    expect(fourth([-2, -1, 0, 2], 0)).toStrictEqual([-2, 2]);
  });
});
