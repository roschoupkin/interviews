/*
Дана строка, состоящая из букв латинского алфавита, цифр и скобок  {([])}.
Необходимо проверить, что скобки в строке сбалансированы — на каждую
открывающую скобку приходится закрывающая, и скобочные группы не пересекаются.
Напишите функцию, которая принимает такую строку и возвращает true,
если скобки сбалансированы, и false, если не сбалансированы.
*/

const BRACKETS: Record<string, string> = {
  ')': '(',
  ']': '[',
  '}': '{',
};

function isClosedBracket(char: string) {
  return Boolean(BRACKETS[char]);
}

function isOpenedBracket(char: string) {
  return Object.values(BRACKETS).indexOf(char) >= 0;
}

export function isValid(str: string) {
  const stack = [];
  for (const char of str) {
    if (isClosedBracket(char)) {
      if (BRACKETS[char] !== stack.pop()) {
        return false;
      }
    } else if (isOpenedBracket(char)) {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
