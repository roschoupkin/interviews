export default function range(start: number, end?: number, step = 1) {
  const _start = typeof end === 'number' ? start : 0;
  const _end = typeof end === 'number' ? end : start;
  const length = Math.ceil((_end - _start) / step);

  return length <= 0 ? [] : new Array(length).fill(_start).map((v, i) => v + i * step);
}
