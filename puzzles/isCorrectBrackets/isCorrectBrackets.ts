const BRACKETS: Record<string, string> = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const OPENED_BRACKETS = new Set(Object.keys(BRACKETS));
const CLOSED_BRACKETS = new Set(Object.values(BRACKETS));

const isClosedBracket = (char: string) => OPENED_BRACKETS.has(char);
const isOpenedBracket = (char: string) => CLOSED_BRACKETS.has(char);

export default function isCorrectBrackets(str: string) {
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
