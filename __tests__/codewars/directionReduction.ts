import { Directions, dirReduction, dirReduction2, dirReduction3 } from '@codewars/directionReduction';

describe('Direction reduction', () => {
  const data = {
    first: {
      arguments: [
        Directions.North,
        Directions.South,
        Directions.South,
        Directions.East,
        Directions.West,
        Directions.North,
        Directions.West,
      ],
      result: [Directions.West],
    },
    second: {
      arguments: [Directions.North, Directions.West, Directions.South, Directions.East],
      result: [Directions.North, Directions.West, Directions.South, Directions.East],
    },
    third: {
      arguments: [Directions.North, Directions.South, Directions.East, Directions.West, Directions.East, Directions.West],
      result: [],
    },
  };

  it('Should return correct direction from first function', () => {
    expect(dirReduction(data.first.arguments)).toStrictEqual(data.first.result);
    expect(dirReduction(data.second.arguments)).toStrictEqual(data.second.result);
    expect(dirReduction(data.third.arguments)).toStrictEqual(data.third.result);
  });
  it('Should return correct direction from second function', () => {
    expect(dirReduction2(data.first.arguments)).toStrictEqual(data.first.result);
    expect(dirReduction2(data.second.arguments)).toStrictEqual(data.second.result);
    expect(dirReduction2(data.third.arguments)).toStrictEqual(data.third.result);
  });
  it('Should return correct direction from third function', () => {
    expect(dirReduction3(data.first.arguments)).toStrictEqual(data.first.result);
    expect(dirReduction3(data.second.arguments)).toStrictEqual(data.second.result);
    expect(dirReduction3(data.third.arguments)).toStrictEqual(data.third.result);
  });
});
