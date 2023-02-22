import { compressList, compressList2 } from './compressList';

describe('Compress list', () => {
  it('Compress list correctly by the first solution', () => {
    expect(compressList([1, 4, 5, 2, 3, 9, 8, 11, 0])).toBe('0-5,8-9,11');
    expect(compressList([1, 4, 3, 2])).toBe('1-4');
    expect(compressList([1, 4])).toBe('1,4');
    expect(compressList([1, 2])).toBe('1-2');
    expect(compressList([])).toBe('');
    expect(compressList([1])).toBe('1');
  });

  it('Compress list correctly by the second solution', () => {
    expect(compressList2([1, 4, 5, 2, 3, 9, 8, 11, 0])).toBe('0-5,8-9,11');
    expect(compressList2([1, 4, 3, 2])).toBe('1-4');
    expect(compressList2([1, 4])).toBe('1,4');
    expect(compressList2([1, 2])).toBe('1-2');
    expect(compressList2([])).toBe('');
    expect(compressList2([1])).toBe('1');
  });
});
