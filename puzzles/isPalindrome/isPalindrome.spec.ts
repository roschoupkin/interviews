import { isPalindrome, isPalindrome2, isPalindrome3 } from './isPalindrome';

describe('is palindrome', () => {
  it('Detect palindrome correctly by the first solution', () => {
    expect(isPalindrome('Казак')).toBe(true);
    expect(isPalindrome('А роза упала на лапу Азора')).toBe(true);
    expect(isPalindrome('Do geese see God?')).toBe(true);
    expect(isPalindrome('Madam, I’m Adam')).toBe(true);

    expect(isPalindrome('Test palindrome')).toBe(false);
    expect(isPalindrome('Тест палиндрома')).toBe(false);
    expect(isPalindrome('I’m not a palindrome')).toBe(false);
    expect(isPalindrome('Я не палиндром')).toBe(false);
  });

  it('Detect palindrome correctly by the second solution', () => {
    expect(isPalindrome2('Казак')).toBe(true);
    expect(isPalindrome2('А роза упала на лапу Азора')).toBe(true);
    expect(isPalindrome2('Do geese see God?')).toBe(true);
    expect(isPalindrome2('Madam, I’m Adam')).toBe(true);

    expect(isPalindrome2('Test palindrome')).toBe(false);
    expect(isPalindrome2('Тест палиндрома')).toBe(false);
    expect(isPalindrome2('I’m not a palindrome')).toBe(false);
    expect(isPalindrome2('Я не палиндром')).toBe(false);
  });

  it('Detect palindrome correctly by the third solution', () => {
    expect(isPalindrome3('Казак')).toBe(true);
    expect(isPalindrome3('А роза упала на лапу Азора')).toBe(true);
    expect(isPalindrome3('Do geese see God?')).toBe(true);
    expect(isPalindrome3('Madam, I’m Adam')).toBe(true);

    expect(isPalindrome3('Test palindrome')).toBe(false);
    expect(isPalindrome3('Тест палиндрома')).toBe(false);
    expect(isPalindrome3('I’m not a palindrome')).toBe(false);
    expect(isPalindrome3('Я не палиндром')).toBe(false);
  });
});
