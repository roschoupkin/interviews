import first from './listPowTwo.first';
import second from './listPowTwo.second';
import third from './listPowTwo.third';

describe('listPowTwo', () => {
  it('first', () => {
    expect(first([0, 1, 2])).toStrictEqual([0, 1, 4]);
    expect(first([-5, -3, 0, 1, 2])).toStrictEqual([0, 1, 4, 9, 25]);
    expect(first([-5, -3, 0, 1, 2, 6])).toStrictEqual([0, 1, 4, 9, 25, 36]);
    expect(first([-5, -3, 0, 1, 2, 2, 6])).toStrictEqual([0, 1, 4, 4, 9, 25, 36]);
  });

  it('second', () => {
    expect(second([0, 1, 2])).toStrictEqual([0, 1, 4]);
    expect(second([-5, -3, 0, 1, 2])).toStrictEqual([0, 1, 4, 9, 25]);
    expect(second([-5, -3, 0, 1, 2, 6])).toStrictEqual([0, 1, 4, 9, 25, 36]);
    expect(second([-5, -3, 0, 1, 2, 2, 6])).toStrictEqual([0, 1, 4, 4, 9, 25, 36]);
  });

  it('third', () => {
    expect(third([0, 1, 2])).toStrictEqual([0, 1, 4]);
    expect(third([-5, -3, 0, 1, 2])).toStrictEqual([0, 1, 4, 9, 25]);
    expect(third([-5, -3, 0, 1, 2, 6])).toStrictEqual([0, 1, 4, 9, 25, 36]);
    expect(third([-5, -3, 0, 1, 2, 2, 6])).toStrictEqual([0, 1, 4, 4, 9, 25, 36]);
  });
});
