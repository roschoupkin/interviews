type SingleParam = [end: number];
type PartsParams = [start: number, end: number];
type AllParams = [start: number, end: number, step: number];

type Params = SingleParam | PartsParams | AllParams;

function toAllParams(...values: Params): AllParams {
  switch (values.length) {
    case 1:
      return [0, values[0], 1];
    case 2:
      return [values[0], values[1], 1];
    default:
      return values;
  }
}

export default function range(...values: Params) {
  const [start, end, step] = toAllParams(...values);
  const length = Math.ceil((end - start) / step);

  if (length <= 0) {
    return [];
  }

  const result: number[] = [];

  for (let i = 0; i < length; i++) {
    result.push(start + i * step);
  }

  return result;
}
