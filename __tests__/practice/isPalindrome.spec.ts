import { isPalindrome, isPalindrome2, isPalindrome3 } from '@practice/isPalindrome';

describe('is palindrome', () => {
  it('Detect palindrome correctly by the first solution', () => {
    expect(isPalindrome('Казак')).toBeTruthy();
    expect(isPalindrome('А роза упала на лапу Азора')).toBeTruthy();
    expect(isPalindrome('Do geese see God?')).toBeTruthy();
    expect(isPalindrome('Madam, I’m Adam')).toBeTruthy();

    expect(isPalindrome('Test palindrome')).toBeFalsy();
    expect(isPalindrome('Тест палиндрома')).toBeFalsy();
    expect(isPalindrome('I’m not a palindrome')).toBeFalsy();
    expect(isPalindrome('Я не палиндром')).toBeFalsy();
  });

  it('Detect palindrome correctly by the second solution', () => {
    expect(isPalindrome2('Казак')).toBeTruthy();
    expect(isPalindrome2('А роза упала на лапу Азора')).toBeTruthy();
    expect(isPalindrome2('Do geese see God?')).toBeTruthy();
    expect(isPalindrome2('Madam, I’m Adam')).toBeTruthy();

    expect(isPalindrome2('Test palindrome')).toBeFalsy();
    expect(isPalindrome2('Тест палиндрома')).toBeFalsy();
    expect(isPalindrome2('I’m not a palindrome')).toBeFalsy();
    expect(isPalindrome2('Я не палиндром')).toBeFalsy();
  });

  it('Detect palindrome correctly by the third solution', () => {
    expect(isPalindrome3('Казак')).toBeTruthy();
    expect(isPalindrome3('А роза упала на лапу Азора')).toBeTruthy();
    expect(isPalindrome3('Do geese see God?')).toBeTruthy();
    expect(isPalindrome3('Madam, I’m Adam')).toBeTruthy();

    expect(isPalindrome3('Test palindrome')).toBeFalsy();
    expect(isPalindrome3('Тест палиндрома')).toBeFalsy();
    expect(isPalindrome3('I’m not a palindrome')).toBeFalsy();
    expect(isPalindrome3('Я не палиндром')).toBeFalsy();
  });
});
