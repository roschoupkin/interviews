import first from './fuzzysearch.first';
import second from './fuzzysearch.second';
import third from './fuzzysearch.third';

describe('fuzzysearch', () => {
  test('first', () => {
    expect(first('car', 'cartwheel')).toBe(true);
    expect(first('cwhl', 'cartwheel')).toBe(true);
    expect(first('cwhee', 'cartwheel')).toBe(true);
    expect(first('cartwheel', 'cartwheel')).toBe(true);

    expect(first('cwheeel', 'cartwheel')).toBe(false);
    expect(first('lw', 'cartwheel')).toBe(false);
  });

  test('second', () => {
    expect(second('car', 'cartwheel')).toBe(true);
    expect(second('cwhl', 'cartwheel')).toBe(true);
    expect(second('cwhee', 'cartwheel')).toBe(true);
    expect(second('cartwheel', 'cartwheel')).toBe(true);

    expect(second('cwheeel', 'cartwheel')).toBe(false);
    expect(second('lw', 'cartwheel')).toBe(false);
  });

  test('third', () => {
    expect(third('car', 'cartwheel')).toBe(true);
    expect(third('cwhl', 'cartwheel')).toBe(true);
    expect(third('cwhee', 'cartwheel')).toBe(true);
    expect(third('cartwheel', 'cartwheel')).toBe(true);

    expect(third('cwheeel', 'cartwheel')).toBe(false);
    expect(third('lw', 'cartwheel')).toBe(false);
  });
});
