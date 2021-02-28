import { centuryFromYear } from '@practice/centuryFromYear';

describe('Century from year', () => {
  it('Should return correct answer', () => {
    expect(centuryFromYear(1705)).toBe(18);
    expect(centuryFromYear(1900)).toBe(19);
    expect(centuryFromYear(1601)).toBe(17);
    expect(centuryFromYear(2000)).toBe(20);
  });
});
