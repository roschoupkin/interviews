# Сгенерировать рандомный HEX

Написать метод `generateRandomHEX`, который после каждого вызова отдает рандомное число

### Шаблон для задачки

```js
/**
  Написать функцию которая возвращает случайный цвет.
  generateRandomHEX() -> #0f19ab
  generateRandomHEX() -> #e99064
 */

function generateRandomHEX() {
  // code here
}
```

### Пример вызова

```js
generateRandomHEX(); // #0f19ab
generateRandomHEX(); // #e99064
```

### Как вариант дополнения

Можно предложить реализовать объект `generators` с геттером, который отдаёт рандомный HEX:

```js
generators.hex; // #0f19ab
generators.hex; // #e99064
```

### Решения

- [Кажется, единственное решение](generateRandomHEX.ts)
