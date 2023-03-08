export default function longestSubString(input: string): number {
  let longest = 0;
  const store: string[] = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const last = store.indexOf(char);

    if (last >= 0) {
      store.splice(0, last + 1);
    }

    longest = Math.max(longest, store.push(char));
  }

  return longest;
}
