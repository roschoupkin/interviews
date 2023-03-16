import sumOfChains from './sumOfChains';

describe('sum', () => {
  test('first', () => {
    expect(+sumOfChains(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(0)(1)).toBe(1);
    expect(+sumOfChains(1)(2, 4)(5, 6, 7, 8)).toBe(33);
    expect(+sumOfChains(6)(-1)(-2)(-3)).toBe(0);
    expect(+sumOfChains(0)(1)(2, 5)(3, 4)).toBe(15);
  });
});
