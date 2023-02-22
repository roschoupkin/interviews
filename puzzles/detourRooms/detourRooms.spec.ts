import { detourRooms1, detourRooms2 } from './detourRooms';

describe('Detour rooms', () => {
  it('Should return correct answer by the first solution', () => {
    expect(detourRooms1([[], [1, 2], []])).toBeFalsy();
    expect(detourRooms1([[1], [2], [], []])).toBeFalsy();
    expect(detourRooms1([[1, 2], [], []])).toBeTruthy();
    expect(detourRooms1([[1, 2], [3], [], []])).toBeTruthy();
    expect(detourRooms1([[1, 2], [2], [1, 3], [4], [1]])).toBeTruthy();
  });

  it('Should return correct answer by the second solution', () => {
    expect(detourRooms2([[], [1, 2], []])).toBeFalsy();
    expect(detourRooms2([[1], [2], [], []])).toBeFalsy();
    expect(detourRooms2([[1, 2], [], []])).toBeTruthy();
    expect(detourRooms2([[1, 2], [3], [], []])).toBeTruthy();
    expect(detourRooms2([[1, 2], [2], [1, 3], [4], [1]])).toBeTruthy();
  });
});
