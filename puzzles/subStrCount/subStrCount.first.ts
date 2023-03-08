export default function subStrCount(str: string, subStr: string): number {
  return (str.match(new RegExp(subStr, 'g')) ?? []).length;
}
