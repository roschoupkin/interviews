import { fuzzysearch, fuzzysearch2 } from '@practice/fuzzysearch';

describe('Fuzzy Search', () => {
  it('Substring of the string by the first method', () => {
    expect(fuzzysearch('car', 'cartwheel')).toBeTruthy();
    expect(fuzzysearch('cwhl', 'cartwheel')).toBeTruthy();
    expect(fuzzysearch('cwhee', 'cartwheel')).toBeTruthy();
    expect(fuzzysearch('cartwheel', 'cartwheel')).toBeTruthy();

    expect(fuzzysearch('cwheeel', 'cartwheel')).toBeFalsy();
    expect(fuzzysearch('lw', 'cartwheel')).toBeFalsy();
  });

  it('Substring of the string by the second method', () => {
    expect(fuzzysearch2('car', 'cartwheel')).toBeTruthy();
    expect(fuzzysearch2('cwhl', 'cartwheel')).toBeTruthy();
    expect(fuzzysearch2('cwhee', 'cartwheel')).toBeTruthy();
    expect(fuzzysearch2('cartwheel', 'cartwheel')).toBeTruthy();

    expect(fuzzysearch2('cwheeel', 'cartwheel')).toBeFalsy();
    expect(fuzzysearch2('lw', 'cartwheel')).toBeFalsy();
  });
});
