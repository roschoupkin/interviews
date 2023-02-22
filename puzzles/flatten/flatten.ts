/**
  Дан массив, в котором могут храниться любые типы данных.
  Нужно реализовать функцию, которая разворачивает вложенные массивы в исходный массив.
  Данные остальных типов должны остаться без изменений.
  Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы).
  Встроенный метод Array.prototype.flat() использовать нельзя
 */

export function flatten(income: unknown[]): unknown[] {
  const stack = [income];
  const result: unknown[] = [];

  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      for (let i = item.length - 1; i >= 0; i--) {
        stack.push(item[i]);
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

export function flatten2(list: unknown[]) {
  return list.reduce<unknown[]>((res, cur) => {
    return res.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}
