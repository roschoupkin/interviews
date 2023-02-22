import bind from './bind';

interface SumContext {
  a: number;
}

function sum(this: SumContext, a: number) {
  return a + this.a;
}

describe('bind', () => {
  it('first', () => {
    const apply = bind(sum, { a: 3 });
    expect(apply(2)).toBe(5);
  });
});
