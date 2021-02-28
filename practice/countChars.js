/**
 * Дана строка (возможно, пустая), состоящая из букв A-Z:
 * AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
 * Нужно написать функцию counter, которая на выходе даст строку вида:
 * A4B3C2XYZD4E3F3A6B28
 * Пояснения:
 * - Если символ встречается 1 раз, он остается без изменений;
 * - Если символ повторяется более 1 раза, к нему добавляется количество повторений.
 */
function counter(str) {
  if (/[^A-Z]/g.test(str)) {
    throw Error('Invalid string');
  }
  return str.replace(/([A-Z])\1+/g, (m) => `${m[0]}${m.length}`);
}

console.log(counter('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')); // A4B3C2XYZD4E3F3A6B28
console.log(counter('AAAABBBCCXYZDDDDEEEfffFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')); // Error: Invalid string

