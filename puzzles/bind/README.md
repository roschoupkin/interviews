# Написать свой bind

Надо написать метод `bind` такой, чтобы выполнял те же функции, что и `Function.bind`

### Шаблон для задачки

```js
/**
   Представьте мир, где нету метода bind для привязки контекста к функции, надо написать альтернативное решение
 */

function bind() {
  // code here
}
```

### Пример вызова

```js
function sum(a) {
  return a + this.a;
}

const sumWithContext = bind(sum, { a: 3 });
sumWithContext(2); // 5
```

### Решения

- [Через метод apply](bind.ts)

### Наводящие вопросы

- Что возвращает bind?
- Что такое глобальный this?
- Можно спросить про замыкание
- Можно спросить про область видимости
