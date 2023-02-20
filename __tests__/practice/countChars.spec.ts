import { counter, counter2, counter3 } from '@practice/countChars';

describe('Count chars into string', () => {
  it('Should return a new string with counted characters', () => {
    expect(counter('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B28');
  });
  it('Should return error', () => {
    expect(() => counter('AAAABBBCCXYZDDDDEEEfffFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toThrow('Invalid string');
  });

  it('Should return a new string with counted characters', () => {
    expect(counter2('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B28');
  });
  it('Should return error', () => {
    expect(() => counter2('AAAABBBCCXYZDDDDEEEfffFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toThrow('Invalid string');
  });

  it('Should return a new string with counted characters', () => {
    expect(counter3('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B28');
  });
  it('Should return error', () => {
    expect(() => counter3('AAAABBBCCXYZDDDDEEEfffFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toThrow('Invalid string');
  });
});
