import { findEqualElements } from './findEqualElements';

describe('findEqualElements', () => {
  test('return equal elements', () => {
    expect(findEqualElements([1, 2, 3], [2])).toStrictEqual([2]);
    expect(findEqualElements([2], [1, 2, 3])).toStrictEqual([2]);
    expect(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2])).toStrictEqual([2, 2]);
  });
});
