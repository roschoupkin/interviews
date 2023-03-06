export default function counter(str: string): string {
  if (/[^A-Z]/.test(str)) {
    throw new Error('Invalid string');
  }
  return str.replace(/([A-Z])\1+/g, (m) => `${m[0]}${m.length}`);
}
