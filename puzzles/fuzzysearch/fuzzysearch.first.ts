export default function fuzzysearch(subStr: string, str: string): boolean {
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
