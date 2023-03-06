# Последовательность фибоначи

Написать функцию `fibonacci`, которая возвращает n-ное число из последовательности

### Шаблон для задачки

```js
/**
 Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности,
 причем n — число, которое передается в качестве аргумента функции.
 Пример: fibonacci(3) === 2
 Первые десять чисел выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 */

function fibonacci(n) {
  // code here
}
```

### Пример вызова

```js
fibonacci(0); // 0
fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(5); // 5
fibonacci(10); // 55
```

### Решения

- [Решение через рекурсию](fibonacci.first.ts)
- [Решение через формирование списка](fibonacci.second.ts)

### Наводящие вопросы

- Чем решение через рекурсию может быть хуже формирования списка?
- Можно попросить реализовать через два указателя