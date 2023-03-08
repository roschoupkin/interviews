import first from './detourRooms.first';
import second from './detourRooms.second';

describe('detourRooms', () => {
  test('first', () => {
    expect(first([[], [1, 2], []])).toBe(false);
    expect(first([[1], [2], [], []])).toBe(false);
    expect(first([[1, 2], [], []])).toBe(true);
    expect(first([[1, 2], [3], [], []])).toBe(true);
    expect(first([[1, 2], [2], [1, 3], [4], [1]])).toBe(true);
  });

  test('second', () => {
    expect(second([[], [1, 2], []])).toBe(false);
    expect(second([[1], [2], [], []])).toBe(false);
    expect(second([[1, 2], [], []])).toBe(true);
    expect(second([[1, 2], [3], [], []])).toBe(true);
    expect(second([[1, 2], [2], [1, 3], [4], [1]])).toBe(true);
  });
});
