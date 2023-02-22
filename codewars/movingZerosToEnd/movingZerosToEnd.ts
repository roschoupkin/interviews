/**
 * Напишите метод moveZeros, который берёт массив и перемещает все нули в конец, сохраняя порядок остальных элементов.
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // [false,1,1,2,1,3,"a",0,0]
 */

export const moveZeros = (arr: unknown[]): unknown[] => {
  const filtered = arr.filter((v) => v !== 0);
  return [...filtered, ...Array(arr.length - filtered.length).fill(0)];
};

export const moveZeros2 = (arr: unknown[]): unknown[] => {
  return arr.filter((val) => val !== 0).concat(arr.filter((val) => val === 0));
};

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // [false,1,1,2,1,3,"a",0,0]
moveZeros2([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // [false,1,1,2,1,3,"a",0,0]
