import extractEquals from './extractEquals';

describe('extractEquals', () => {
  test('first', () => {
    expect(extractEquals([1, 2, 3], [2])).toStrictEqual([2]);
    expect(extractEquals([2], [1, 2, 3])).toStrictEqual([2]);
    expect(extractEquals([1, 2, 2, 3], [2, 2, 2, 2])).toStrictEqual([2, 2]);
    expect(extractEquals([1, 2, 3, 4, 5, 6, 7, 8], [1, 4, 6, 8])).toStrictEqual([1, 4, 6, 8]);
  });
});
