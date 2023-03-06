# Реализовать fuzzysearch

Написать функцию `fuzzysearch` из редактора Sublime

### Шаблон для задачки

```js
/**
  Реализовать функцию fuzzysearch как в редакторе sublime text 3 .
  Для незнакомых с редактором и/или термином fuzzysearch (нечёткий поиск), можно упомянуть более формальное название —
  approximate string matching (нахождение приблизительного соответствия строк).
  По факту требуется проверить, является ли первая строка подпоследовательностью второй.
 */

function fuzzysearch(subStr: string, str: string) {
  // code here
}
```

### Пример вызова

```js
fuzzysearch('car', 'cartwheel'); // true
fuzzysearch('cwhl', 'cartwheel'); // true
fuzzysearch('cwhee', 'cartwheel'); // true
fuzzysearch('cartwheel', 'cartwheel'); // true
fuzzysearch('cwheeel', 'cartwheel'); // false
fuzzysearch('lw', 'cartwheel'); // false
```

### Решения

- [Решение через пробег по строке](fuzzysearch.first.ts)
- [Решение через прерывание с указателем](fuzzysearch.second.ts)
- [Решение через пробег с контекстом](fuzzysearch.second.ts)
