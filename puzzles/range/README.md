# Реализовать базовый range из Python

Написать метод `range`, который частично повторяет логику аналогичного метода в Python

### Шаблон для задачки

```js
/**
  Реализовать базовый range как в python.
 
  Примеры вызова метода:
  range(start, stop, step = 1) или range(stop)
*/

function range() {
  // code here
}
```

### Пример использования

```js
const allParams = [];
for (const i of range(-6, 0, 2)) {
  result.push(i);
}

console.log(allParams); // [-6, -4, -2]

const singleParam = [];
for (const i of range(10)) {
  result.push(i);
}

console.log(singleParam); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Решения

- [Решение через new Array и обновление значений (короткое)](range.first.ts)
- [Решение через ормирование нового массива (более длинное)](range.second.ts)
- [Решение через генератор и формирование итератора](range.third.ts)
