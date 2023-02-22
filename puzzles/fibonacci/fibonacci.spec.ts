import { fibonacci, fibonacci2 } from './fibonacci';

describe('Fibonacci', () => {
  it('Should return correct Fibonacci number by first method', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });
  it('Should return correct Fibonacci number by second method', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci2(3)).toBe(2);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci2(10)).toBe(55);
  });
});
