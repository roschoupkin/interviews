import first from './flatten.first';
import second from './flatten.second';

describe('flatten', () => {
  test('first', () => {
    expect(first([1, 'any [complex] string', null, [1, 2, [3, '4'], 0], [], { a: 1 }])).toStrictEqual([
      1,
      'any [complex] string',
      null,
      1,
      2,
      3,
      '4',
      0,
      { a: 1 },
    ]);
    expect(first([0, [1, [2, 3]], 4])).toStrictEqual([0, 1, 2, 3, 4]);
    expect(first([[1, 5]])).toStrictEqual([1, 5]);
  });

  test('second', () => {
    expect(second([1, 'any [complex] string', null, [1, 2, [3, '4'], 0], [], { a: 1 }])).toStrictEqual([
      1,
      'any [complex] string',
      null,
      1,
      2,
      3,
      '4',
      0,
      { a: 1 },
    ]);
    expect(second([0, [1, [2, 3]], 4])).toStrictEqual([0, 1, 2, 3, 4]);
    expect(second([[1, 5]])).toStrictEqual([1, 5]);
  });
});
