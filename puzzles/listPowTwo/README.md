# Возвести список во вторую степень

Написать метод `listPowTwo`, который возводит все числа во вторую степень и сортирует результат

### Шаблон для задачки

```js
/**
  Имеем отсортированный по возрастанию список чисел
  Необходимо все значения списка возвести во вторую степень и вернуть в отсортированном по возрастанию виде

  [0, 1, 2] -> [0, 1, 4]
  [-5, -3, 0, 1, 2] -> [0, 1, 2, 9, 25]
  [-5, -3, 0, 1, 2, 6] -> [0, 1, 4, 9, 25, 36]
  [-5, -3, 0, 1, 2, 2, 6] -> [0, 1, 4, 4, 9, 25, 36]
 */

function listPowTwo(list) {
  // code here
}
```

### Пример вызова

```js
listPowTwo([0, 1, 2]); // [0, 1, 4]
listPowTwo([-5, -3, 0, 1, 2]); // [0, 1, 4, 9, 25]
listPowTwo([-5, -3, 0, 1, 2, 6]); // [0, 1, 4, 9, 25, 36]
listPowTwo([-5, -3, 0, 1, 2, 2, 6]); // [0, 1, 4, 4, 9, 25, 36]
```

### Решения

- [Решение в лоб, возведение в степень и сортировка](listPowTwo.first.ts)
- [Решение через два указателя и движение с двух сторон](listPowTwo.second.ts)
- [Решение через два указателя и наполнением подготовленного массива](listPowTwo.third.ts)
