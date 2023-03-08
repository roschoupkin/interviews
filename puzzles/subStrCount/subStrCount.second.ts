export default function subStrCount(str: string, subStr: string): number {
  return str.split(subStr).length - 1;
}
