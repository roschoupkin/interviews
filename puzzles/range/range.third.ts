type SingleParam = [end: number];
type PartsParams = [start: number, end: number];
type AllParams = [start: number, end: number, step: number];

type Params = SingleParam | PartsParams | AllParams;

export default function* range(...values: Params) {
  const step = typeof values[2] === 'number' ? values[2] : 1;
  const start = typeof values[1] === 'number' ? values[0] : 0;
  const end = typeof values[1] === 'number' ? values[1] : values[0];

  let iter = 0;

  while (iter < Math.ceil((end - start) / step)) {
    yield start + iter++ * step;
  }
}
