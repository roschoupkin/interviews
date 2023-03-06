export default function counter(input: string): string {
  if (/[^A-Z]/.test(input)) {
    throw new Error('Invalid string');
  }

  let result = '';
  let counter = 1;
  let current = input[0];

  for (let i = 1; i < input.length; i++) {
    while (current === input[i]) {
      counter++;
      i++;
    }

    result += current + (counter > 1 ? counter : '');
    counter = 1;
    current = input[i];
  }

  return result;
}
