import first from './listToRange.first';
import second from './listToRange.second';

describe('listToRange', () => {
  test('first', () => {
    expect(first([1, 4, 5, 2, 3, 9, 8, 11, 0])).toBe('0-5,8-9,11');
    expect(first([1, 4, 3, 2])).toBe('1-4');
    expect(first([1, 4])).toBe('1,4');
    expect(first([1, 2])).toBe('1-2');
    expect(first([])).toBe('');
    expect(first([1])).toBe('1');
  });

  test('second', () => {
    expect(second([1, 4, 5, 2, 3, 9, 8, 11, 0])).toBe('0-5,8-9,11');
    expect(second([1, 4, 3, 2])).toBe('1-4');
    expect(second([1, 4])).toBe('1,4');
    expect(second([1, 2])).toBe('1-2');
    expect(second([])).toBe('');
    expect(second([1])).toBe('1');
  });
});
