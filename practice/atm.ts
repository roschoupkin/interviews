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

export type Nominal = 50 | 100 | 500 | 1000 | 5000;
export type Limits = Record<Nominal, number>;
export type Cash = Partial<Limits>;

export function atm(amount: number, limits: Limits, nominals: Nominal[]): Cash {
  if (amount % nominals[nominals.length - 1] !== 0) {
    throw new Error('Error: Incorrect value');
  }

  const cash: Cash = {};

  for (const nominal of nominals) {
    const desired = Math.min(Math.trunc(amount / nominal), limits[nominal]);

    if (desired) {
      cash[nominal] = desired;
      amount -= nominal * desired;
    }

    if (!amount) {
      break;
    }
  }

  if (amount) {
    throw new Error('Error: Not enough money');
  }

  for (const nominal of nominals) {
    limits[nominal] -= cash[nominal] ?? 0;
  }

  return cash;
}
