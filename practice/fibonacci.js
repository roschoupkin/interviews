/**
 Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности, причем n — число, которое передается в качестве аргумента функции.
 fibonacci(3) === 2
 Первые десять чисел выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 */

function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(3); // 2
fibonacci(10); // 34

function fibonacci2(num) {
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }

  return result[num];
}

fibonacci2(3); // 2
fibonacci2(10); // 34
