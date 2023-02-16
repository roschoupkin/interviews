import { bindApply } from '@practice/bind';
import { expect } from '@jest/globals';

interface SumContext {
  a: number;
}

function sum(this: SumContext, a: number) {
  return a + this.a;
}

describe('bind', () => {
  it('Default bind', () => {
    const bind = sum.bind({ a: 4 });
    expect(bind(2)).toBe(6);
  });

  it('Bind by apply', () => {
    const apply = bindApply(sum, { a: 3 });
    expect(apply(2)).toBe(5);
  });
});
