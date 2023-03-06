export default function fuzzysearch(subStr: string, str: string): boolean {
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
