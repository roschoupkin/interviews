export default function flatten(list: unknown[]): unknown[] {
  return list.reduce<unknown[]>((res, cur) => {
    return res.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}
