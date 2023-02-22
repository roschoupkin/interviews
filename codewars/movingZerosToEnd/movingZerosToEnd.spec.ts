import { moveZeros, moveZeros2 } from './movingZerosToEnd';

describe('Moving zeros to end', () => {
  const data = {
    first: {
      arguments: [false, 1, 0, 1, 2, 0, 1, 3, 'a'],
      result: [false, 1, 1, 2, 1, 3, 'a', 0, 0],
    },
    second: {
      arguments: [false, 1, 0, 1, 2, 0, 1, 3, 'a'],
      result: [false, 1, 1, 2, 1, 3, 'a', 0, 0],
    },
  };

  it('Should return correct array from first function', () => {
    expect(moveZeros(data.first.arguments)).toStrictEqual(data.first.result);
    expect(moveZeros(data.second.arguments)).toStrictEqual(data.second.result);
  });
  it('Should return correct array from second function', () => {
    expect(moveZeros2(data.first.arguments)).toStrictEqual(data.first.result);
    expect(moveZeros2(data.second.arguments)).toStrictEqual(data.second.result);
  });
});
