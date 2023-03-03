import { detourRooms1, detourRooms2 } from './detourRooms';

describe('Detour rooms', () => {
  it('Should return correct answer by the first solution', () => {
    expect(detourRooms1([[], [1, 2], []])).toBe(false);
    expect(detourRooms1([[1], [2], [], []])).toBe(false);
    expect(detourRooms1([[1, 2], [], []])).toBe(true);
    expect(detourRooms1([[1, 2], [3], [], []])).toBe(true);
    expect(detourRooms1([[1, 2], [2], [1, 3], [4], [1]])).toBe(true);
  });

  it('Should return correct answer by the second solution', () => {
    expect(detourRooms2([[], [1, 2], []])).toBe(false);
    expect(detourRooms2([[1], [2], [], []])).toBe(false);
    expect(detourRooms2([[1, 2], [], []])).toBe(true);
    expect(detourRooms2([[1, 2], [3], [], []])).toBe(true);
    expect(detourRooms2([[1, 2], [2], [1, 3], [4], [1]])).toBe(true);
  });
});
