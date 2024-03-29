# Релизовать логику банкомата

Надо написать метод `atm`, который будет соблюдать логику работы банкомата и обновлять количество денег

### Шаблон для задачки

```js
/**
  В банкомате есть купюры — 50, 100, 500, 1000, 5000 руб. Номиналы купюр только такие, они не меняются
  и доступны в константе nominals.
  Есть ограничение на количество каждой из купюр (аргумент limits), его нужно держать в актуальном
  состоянии (мутировать).
  Нужно вернуть купюры и их количество, которыми можно выдать запрашиваемую сумму, в виде
  объекта в формате, аналогичном объекту лимитов.
  При прочих равных возможностях выдать одну и ту же сумму разными купюрами приоритет отдаётся крупным.
  Если выдать запрашиваемую сумму не получится в принципе (сумма не кратна минимальной купюре) —
  вернуть ошибку 'Error: Incorrect value'.
  Если в банкомате недостаточно нужных купюр — вернуть ошибку 'Error: Not enough money'.
 */

function atm() {
  // code here
}
```

### Пример вызова

```js
const nominals = [5000, 1000, 500, 100, 50]; // Упорядочено
const limits = { 5000: 0, 1000: 6, 500: 5, 100: 5, 50: 4 };

atm(1250, limits, nominals); // { 1000: 1, 100: 2, 50: 1 }
atm(1000000, limits, nominals); // 'Error: Not enough money'
atm(2400, limits, nominals); // { 1000: 2, 100: 3, 50: 2 }
atm(6512, limits, nominals); // 'Error: Incorrect value'
atm(50, limits, nominals); // { 50: 1 }
atm(50, limits, nominals); // 'Error: Not enough money'
atm(5500, limits, nominals); // { 1000: 3, 500: 5 }

// После каждого вызова значение limits изменяется
```

### Решения

- [Решение в лоб](atm.ts)
