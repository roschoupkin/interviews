import { recoverSecret } from './recoverSecret';

describe('Recover a secret string from random triplets', () => {
  test('Should return whatisup', () => {
    expect(
      recoverSecret([
        ['t', 'u', 'p'],
        ['w', 'h', 'i'],
        ['t', 's', 'u'],
        ['a', 't', 's'],
        ['h', 'a', 'p'],
        ['t', 'i', 's'],
        ['w', 'h', 's'],
      ])
    ).toEqual('whatisup');
  });
});
