import first from './fibonacci.first';
import second from './fibonacci.second';

describe('fibonacci', () => {
  test('first', () => {
    expect(first(0)).toBe(0);
    expect(first(1)).toBe(1);
    expect(first(2)).toBe(1);
    expect(first(3)).toBe(2);
    expect(first(5)).toBe(5);
    expect(first(10)).toBe(55);
  });
  test('second', () => {
    expect(second(0)).toBe(0);
    expect(second(1)).toBe(1);
    expect(second(2)).toBe(1);
    expect(second(3)).toBe(2);
    expect(second(5)).toBe(5);
    expect(second(10)).toBe(55);
  });
});
