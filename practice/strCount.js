/*
Написать функцию, которая принимает на входа 2 строковых аргумента,
подсчитывает количество вхождений строки из второго аргумента в
строке из первого аргумента.

Замечания:
  - первый аргумент может быть пустой строкой
  - второй аргумент может быть только строкой из одного символа
*/

function strCountByRegExp(str, subStr) {
  return (str.match(new RegExp(subStr, 'g')) ?? []).length;
}

strCountByRegExp('Hello', 'o') // => 1
strCountByRegExp('Hello', 'l') // => 2
strCountByRegExp('', 'z')      // => 0

function strCountFast(str, subStr) {
  return str.split(subStr).length - 1;
}

strCountFast('Hello', 'o') // => 1
strCountFast('Hello', 'l') // => 2
strCountFast('', 'z')      // => 0
