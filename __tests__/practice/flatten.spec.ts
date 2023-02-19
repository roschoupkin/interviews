import { flatten, flatten2 } from '@practice/flatten';
import { expect } from '@jest/globals';

describe('flatten', () => {
  it('Correct flatten method by iterative solution', () => {
    expect(flatten([1, 'any [complex] string', null, [1, 2, [3, '4'], 0], [], { a: 1 }])).toStrictEqual([
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
    expect(flatten([0, [1, [2, 3]], 4])).toStrictEqual([0, 1, 2, 3, 4]);
    expect(flatten([[1, 5]])).toStrictEqual([1, 5]);
  });

  it('Correct flatten method by recursive solution', () => {
    expect(flatten2([1, 'any [complex] string', null, [1, 2, [3, '4'], 0], [], { a: 1 }])).toStrictEqual([
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
    expect(flatten2([0, [1, [2, 3]], 4])).toStrictEqual([0, 1, 2, 3, 4]);
    expect(flatten2([[1, 5]])).toStrictEqual([1, 5]);
  });
});
