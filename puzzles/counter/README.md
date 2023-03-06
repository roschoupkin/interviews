# Написать RLE метод counter

Надо написать метод `counter`, который будет принимать на вход строку и отдавать группы символов
Что такое RLE можно почитать тут – [wiki](https://en.wikipedia.org/wiki/Run-length_encoding)

### Шаблон для задачки

```js
/**
    Дана строка (возможно, пустая), состоящая из букв A-Z:
    AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
 
    Нужно написать функцию counter, которая на выходе даст строку вида:
    A4B3C2XYZD4E3F3A6B28
 
    Пояснения:
    - Если символ встречается 1 раз, он остается без изменений;
    - Если символ повторяется более 1 раза, к нему добавляется количество повторений.
 */

function counter() {
  // code here
}
```

### Решения

- [Через цикл for, один прогон](counter.first.ts)
- [Через цикл for и while, один прогон](counter.second.ts)
- [Через регулярку](counter.third.ts)
