import { fuzzysearch, fuzzysearch2, fuzzysearch3 } from './fuzzysearch';

describe('fuzzysearch', () => {
  it('first', () => {
    expect(fuzzysearch('car', 'cartwheel')).toBe(true);
    expect(fuzzysearch('cwhl', 'cartwheel')).toBe(true);
    expect(fuzzysearch('cwhee', 'cartwheel')).toBe(true);
    expect(fuzzysearch('cartwheel', 'cartwheel')).toBe(true);

    expect(fuzzysearch('cwheeel', 'cartwheel')).toBe(false);
    expect(fuzzysearch('lw', 'cartwheel')).toBe(false);
  });

  it('second', () => {
    expect(fuzzysearch2('car', 'cartwheel')).toBe(true);
    expect(fuzzysearch2('cwhl', 'cartwheel')).toBe(true);
    expect(fuzzysearch2('cwhee', 'cartwheel')).toBe(true);
    expect(fuzzysearch2('cartwheel', 'cartwheel')).toBe(true);

    expect(fuzzysearch2('cwheeel', 'cartwheel')).toBe(false);
    expect(fuzzysearch2('lw', 'cartwheel')).toBe(false);
  });

  it('third', () => {
    expect(fuzzysearch3('car', 'cartwheel')).toBe(true);
    expect(fuzzysearch3('cwhl', 'cartwheel')).toBe(true);
    expect(fuzzysearch3('cwhee', 'cartwheel')).toBe(true);
    expect(fuzzysearch3('cartwheel', 'cartwheel')).toBe(true);

    expect(fuzzysearch3('cwheeel', 'cartwheel')).toBe(false);
    expect(fuzzysearch3('lw', 'cartwheel')).toBe(false);
  });
});
