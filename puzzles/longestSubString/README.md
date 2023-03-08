# Самая длинаая подстрока в строке

Написать метод `longestSubString`, который возвращает длину самой длинной подстроки

### Шаблон для задачки

```js
/**
  Дана строка, найти длину наибольшей подстроки, состоящей из уникальных символов.
  Строка может содержать только маленькие буквы английского алфавита.

  "abcdabc" → 4 ("abcd")
  "zabcade" → 5 ("bcade")
 */

function longestSubString(str) {
  // code here
}
```

### Пример вызова

```js
longestSubString('abcabcbb'); // 3
longestSubString('bbbbb'); // 1
longestSubString('zabcade'); // 5
longestSubString('abcdebaabcdefg'); // 7
```

### Решения

- [Решение через формирование строки](longestSubString.first.ts)
- [Решение через формирование массива](longestSubString.second.ts)
