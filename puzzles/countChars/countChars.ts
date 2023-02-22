/**
 * Дана строка (возможно, пустая), состоящая из букв A-Z:
 * AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
 * Нужно написать функцию counter, которая на выходе даст строку вида:
 * A4B3C2XYZD4E3F3A6B28
 * Пояснения:
 * - Если символ встречается 1 раз, он остается без изменений;
 * - Если символ повторяется более 1 раза, к нему добавляется количество повторений.
 */

export function counter(str: string): string {
  if (/[^A-Z]/.test(str)) {
    throw new Error('Invalid string');
  }
  return str.replace(/([A-Z])\1+/g, (m) => `${m[0]}${m.length}`);
}

export function counter2(income: string): string {
  if (/[^A-Z]/.test(income)) {
    throw new Error('Invalid string');
  }

  const environment = { prev: income[0], amount: 0, result: '' };

  for (let i = 0; i <= income.length; i++) {
    const char = income[i];

    if (environment.prev === char) {
      environment.amount++;
    } else {
      const amount = environment.amount === 1 ? '' : environment.amount;
      environment.result += environment.prev + amount;

      environment.prev = char;
      environment.amount = 1;
    }
  }

  return environment.result;
}

export function counter3(input: string): string {
  if (/[^A-Z]/.test(input)) {
    throw new Error('Invalid string');
  }

  let result = '';
  let counter = 1;
  let current = input[0];

  for (let i = 1; i < input.length; i++) {
    while (current === input[i]) {
      counter++;
      i++;
    }

    result += current + (counter > 1 ? counter : '');
    counter = 1;
    current = input[i];
  }

  return result;
}
