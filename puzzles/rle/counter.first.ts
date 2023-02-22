export default function counter(input: string): string {
  if (/[^A-Z]/.test(input)) {
    throw new Error('Invalid string');
  }

  let amount = 0;
  let result = '';
  let prev = input[0];

  for (let i = 0; i <= input.length; i++) {
    const char = input[i];

    if (prev === char) {
      amount++;
    } else {
      result += prev + (amount === 1 ? '' : amount);

      prev = char;
      amount = 1;
    }
  }

  return result;
}
