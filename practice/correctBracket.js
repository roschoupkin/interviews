/*
Дана строка, состоящая из букв латинского алфавита, цифр и скобок  {([])}.
Необходимо проверить, что скобки в строке сбалансированы — на каждую
открывающую скобку приходится закрывающая, и скобочные группы не пересекаются.
Напишите функцию, которая принимает такую строку и возвращает true,
если скобки сбалансированы, и false, если не сбалансированы.
*/

const BRACKETS = {
  ')': '(',
  ']': '[',
  '}': '{'
};

function isClosedBracket(char) {
  return Boolean(BRACKETS[char]);
}

function isOpenedBracket(char) {
  return Object.values(BRACKETS).indexOf(char) >= 0;
}

function isValid(str) {
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

isValid("(foo)");  // true
isValid("(f[o]{o})");  // true
isValid("[(){}()()]");  // true
isValid("(foo");  // false
isValid("{f[o}o]");  // false
isValid("()[]{}");  // true
isValid("((()(())))");  // true
isValid("(]");  // false
isValid("([)]");  // false
