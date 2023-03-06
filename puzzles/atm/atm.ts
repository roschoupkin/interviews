import { Cash, Limits, Nominal } from './atm.types';

export default function atm(amount: number, limits: Limits, nominals: Nominal[]): Cash {
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
