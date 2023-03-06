# Проверить сбалансированность скобок

Написать функцию `isCorrectBrackets`, которая получает на вход строку и возвращает `true`, если скобки сбалансированны и `false` в противном случае

### Шаблон для задачки

```js
/**
  Дана строка, состоящая из букв латинского алфавита, цифр и скобок  {([])}.
  Необходимо проверить, что скобки в строке сбалансированы — на каждую
  открывающую скобку приходится закрывающая, и скобочные группы не пересекаются.
  Напишите функцию, которая принимает такую строку и возвращает true,
  если скобки сбалансированы, и false, если не сбалансированы.
*/

function isCorrectBrackets(list) {
  // code here
}
```

### Пример вызова

```js
isCorrectBrackets('(foo)'); // true
isCorrectBrackets('(f[o]{o})'); // true
isCorrectBrackets('[(){}()()]'); // true
isCorrectBrackets('(foo'); // false
isCorrectBrackets('{f[o}o]'); // false
isCorrectBrackets('()[]{}'); // true
isCorrectBrackets('((()(())))'); // true
isCorrectBrackets('(]'); // false
isCorrectBrackets('([)]'); // false
```

### Решения

- [Проход по строке один раз](./isCorrectBracket.ts)
