# Генерация простых чисел

Написать функцию `generatePrime`, которая отдаёт список простых чисел до заданного

### Шаблон для задачки

```js
/**
  Вывести простые числа от 1 до N
 */

function generatePrime(subStr: string, str: string) {
  // code here
}
```

### Пример вызова

```js
generatePrime(0); // []
generatePrime(1); // []
generatePrime(2); // [2]
generatePrime(10); // [2, 3, 5, 7]
generatePrime(29); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
generatePrime(50); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
generatePrime(100); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
```

### Решения

- [Решение через формирование в лоб](generatePrime.first.ts)
- [Решение через алгоритм Эратосфена](generatePrime.second.ts)
