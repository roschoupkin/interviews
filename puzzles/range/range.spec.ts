import first from './range.first';
import second from './range.second';
import third from './range.third';

describe('range', () => {
  test('first', () => {
    expect(first(10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(first(1, 11)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(first(0, 30, 5)).toStrictEqual([0, 5, 10, 15, 20, 25]);
    expect(first(0, 10, 3)).toStrictEqual([0, 3, 6, 9]);
    expect(first(-6)).toStrictEqual([]);
    expect(first(-6, 0)).toStrictEqual([-6, -5, -4, -3, -2, -1]);
    expect(first(-6, 0, 2)).toStrictEqual([-6, -4, -2]);
    expect(first(0, -10, -2)).toStrictEqual([0, -2, -4, -6, -8]);
  });

  test('second', () => {
    expect(second(10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(second(1, 11)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(second(0, 30, 5)).toStrictEqual([0, 5, 10, 15, 20, 25]);
    expect(second(0, 10, 3)).toStrictEqual([0, 3, 6, 9]);
    expect(second(-6)).toStrictEqual([]);
    expect(second(-6, 0)).toStrictEqual([-6, -5, -4, -3, -2, -1]);
    expect(second(-6, 0, 2)).toStrictEqual([-6, -4, -2]);
    expect(second(0, -10, -2)).toStrictEqual([0, -2, -4, -6, -8]);
  });

  test('third', () => {
    function generator(...values: Parameters<typeof third>) {
      const result: number[] = [];
      const iterator = third(...values);
      for (const i of iterator) {
        result.push(i);
      }
      return result;
    }

    expect(generator(10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(generator(1, 11)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(generator(0, 30, 5)).toStrictEqual([0, 5, 10, 15, 20, 25]);
    expect(generator(0, 10, 3)).toStrictEqual([0, 3, 6, 9]);
    expect(generator(-6)).toStrictEqual([]);
    expect(generator(-6, 0)).toStrictEqual([-6, -5, -4, -3, -2, -1]);
    expect(generator(-6, 0, 2)).toStrictEqual([-6, -4, -2]);
    expect(generator(0, -10, -2)).toStrictEqual([0, -2, -4, -6, -8]);
  });
});
