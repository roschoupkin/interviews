/**
 * Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
 * palindrome('racecar') === true
 * palindrome('table') === false
 */

function palindrome(str) {
  str = str.toLowerCase()
  return str === str.split('').reverse().join('')
}

palindrome('racecar'); // true
palindrome('table'); // false
