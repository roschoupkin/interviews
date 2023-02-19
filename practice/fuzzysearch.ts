/**
 Реализовать функцию fuzzysearch как в редакторе sublime text 3 .
 Для незнакомых с редактором и/или термином fuzzysearch (нечёткий поиск), можно упомянуть более формальное название —
 approximate string matching (нахождение приблизительного соответствия строк).
 По факту требуется проверить, является ли первая строка подпоследовательностью второй.
 */

export function fuzzysearch(subStr: string, str: string): boolean {
  if (str.indexOf(subStr) > -1) {
    return true;
  }

  let last = -1;

  for (const char of subStr) {
    last = str.indexOf(char, last + 1);
    if (last === -1) {
      return false;
    }
  }

  return true;
}

export function fuzzysearch2(subStr: string, str: string): boolean {
  outer: for (let i = 0, j = 0; i < subStr.length; i++) {
    const nch = subStr.charCodeAt(i);
    while (j < str.length) {
      if (str.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }

  return true;
}
