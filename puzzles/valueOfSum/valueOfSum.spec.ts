import { sum } from './valueOfSum';

describe('Value of sum', () => {
  test('Should return correct sum', () => {
    expect(+sum(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(1)).toBe(1);
    expect(+sum(1)(2, 4)(5, 6, 7, 8)).toBe(33);
    expect(+sum(6)(-1)(-2)(-3)).toBe(0);
    expect(+sum(0)(1)(2, 5)(3, 4)).toBe(15);
  });
});
