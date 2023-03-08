# Проверить, что строка – палиндром

Написать метод `isPalindrome`, которая проверяет, что строка является палиндромом

### Шаблон для задачки

```js
/**
  Написать функцию, которая определяет, является ли переданная строка палиндромом (читается слева-направо и справа-налево одинаково).

  Примеры палиндромов:
  - Казак
  - А роза упала на лапу Азора
  - Do geese see God?
  - Madam, I’m Adam
 */

function isPalindrome(str) {
  // code here
}
```

### Пример вызова

```js
isPalindrome('Казак'); // true
isPalindrome('А роза упала на лапу Азора'); // true
isPalindrome('Do geese see God?'); // true
isPalindrome('Madam, I’m Adam'); // true
isPalindrome('Test palindrome'); // false
isPalindrome('Тест палиндрома'); // false
isPalindrome('I’m not a palindrome'); // false
isPalindrome('Я не палиндром'); // false
```

### Решения

- [Решение через два указателя и проверкой через регистр](isPalindrome.first.ts)
- [Решение в лоб, путём очистки строки от лишнего](isPalindrome.second.ts)
- [Решение через два указателя и проверкой через регулярку](isPalindrome.third.ts)
