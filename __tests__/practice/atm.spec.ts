import { atm, Limits, Nominal } from '@practice/atm';

describe('atm', () => {
  it('Return values correctly', () => {
    const nominals: Nominal[] = [5000, 1000, 500, 100, 50];
    const limits: Limits = { 5000: 0, 1000: 6, 500: 5, 100: 5, 50: 4 };

    expect(atm(1250, limits, nominals)).toStrictEqual({ 1000: 1, 100: 2, 50: 1 });
    expect(() => atm(1000000, limits, nominals)).toThrow(new Error('Error: Not enough money'));
    expect(atm(2400, limits, nominals)).toStrictEqual({ 1000: 2, 100: 3, 50: 2 });
    expect(() => atm(6512, limits, nominals)).toThrow(new Error('Error: Incorrect value'));
    expect(atm(50, limits, nominals)).toStrictEqual({ 50: 1 });
    expect(() => atm(50, limits, nominals)).toThrow(new Error('Error: Not enough money'));
    expect(atm(5500, limits, nominals)).toStrictEqual({ 1000: 3, 500: 5 });
  });
});
