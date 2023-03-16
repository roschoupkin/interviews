import generateRandomHEX from './generateRandomHEX';

describe('generateRandomHEX', () => {
  test('first', () => {
    expect(generateRandomHEX()).not.toBe(generateRandomHEX());
    expect(generateRandomHEX()).toHaveLength(7);
    expect(generateRandomHEX()[0]).toBe('#');
  });
});
