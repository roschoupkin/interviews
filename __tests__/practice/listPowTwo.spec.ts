import { listPowTwo1, listPowTwo2, listPowTwo3 } from '@practice/listPowTwo';

describe('List pow two', () => {
  it('Should return correct list of numbers by the first method', () => {
    expect(listPowTwo1([0, 1, 2])).toStrictEqual([0, 1, 4]);
    expect(listPowTwo1([-5, -3, 0, 1, 2])).toStrictEqual([0, 1, 4, 9, 25]);
    expect(listPowTwo1([-5, -3, 0, 1, 2, 6])).toStrictEqual([0, 1, 4, 9, 25, 36]);
    expect(listPowTwo1([-5, -3, 0, 1, 2, 2, 6])).toStrictEqual([0, 1, 4, 4, 9, 25, 36]);
  });

  it('Should return correct list of numbers by the second method', () => {
    expect(listPowTwo2([0, 1, 2])).toStrictEqual([0, 1, 4]);
    expect(listPowTwo2([-5, -3, 0, 1, 2])).toStrictEqual([0, 1, 4, 9, 25]);
    expect(listPowTwo2([-5, -3, 0, 1, 2, 6])).toStrictEqual([0, 1, 4, 9, 25, 36]);
    expect(listPowTwo2([-5, -3, 0, 1, 2, 2, 6])).toStrictEqual([0, 1, 4, 4, 9, 25, 36]);
  });

  it('Should return correct list of numbers by the third method', () => {
    expect(listPowTwo3([0, 1, 2])).toStrictEqual([0, 1, 4]);
    expect(listPowTwo3([-5, -3, 0, 1, 2])).toStrictEqual([0, 1, 4, 9, 25]);
    expect(listPowTwo3([-5, -3, 0, 1, 2, 6])).toStrictEqual([0, 1, 4, 9, 25, 36]);
    expect(listPowTwo3([-5, -3, 0, 1, 2, 2, 6])).toStrictEqual([0, 1, 4, 4, 9, 25, 36]);
  });
});
