import first from './counter.first';
import second from './counter.second';
import third from './counter.third';

describe('counter', () => {
  it('first', () => {
    expect(first('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B28');
    expect(() => first('AAAABBBCCXYZDDDDEEEfffFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toThrow('Invalid string');
  });

  it('second', () => {
    expect(second('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B28');
    expect(() => second('AAAABBBCCXYZDDDDEEEfffFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toThrow('Invalid string');
  });

  it('third', () => {
    expect(third('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B28');
    expect(() => third('AAAABBBCCXYZDDDDEEEfffFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toThrow('Invalid string');
  });
});
