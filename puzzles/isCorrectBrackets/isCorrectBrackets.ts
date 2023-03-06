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
