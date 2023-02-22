/*
Написать функцию, которая принимает на входа 2 строковых аргумента,
подсчитывает количество вхождений строки из второго аргумента в
строке из первого аргумента.

Замечания:
  - первый аргумент может быть пустой строкой
  - второй аргумент может быть только строкой из одного символа
*/

export function strCountByRegExp(str: string, subStr: string): number {
  return (str.match(new RegExp(subStr, 'g')) ?? []).length;
}

export function strCountFast(str: string, subStr: string): number {
  return str.split(subStr).length - 1;
}
