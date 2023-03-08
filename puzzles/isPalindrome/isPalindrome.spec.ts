import first from './isPalindrome.first';
import second from './isPalindrome.second';
import third from './isPalindrome.third';

describe('isPalindrome', () => {
  test('first', () => {
    expect(first('Казак')).toBe(true);
    expect(first('А роза упала на лапу Азора')).toBe(true);
    expect(first('Do geese see God?')).toBe(true);
    expect(first('Madam, I’m Adam')).toBe(true);

    expect(first('Test palindrome')).toBe(false);
    expect(first('Тест палиндрома')).toBe(false);
    expect(first('I’m not a palindrome')).toBe(false);
    expect(first('Я не палиндром')).toBe(false);
  });

  test('second', () => {
    expect(second('Казак')).toBe(true);
    expect(second('А роза упала на лапу Азора')).toBe(true);
    expect(second('Do geese see God?')).toBe(true);
    expect(second('Madam, I’m Adam')).toBe(true);

    expect(second('Test palindrome')).toBe(false);
    expect(second('Тест палиндрома')).toBe(false);
    expect(second('I’m not a palindrome')).toBe(false);
    expect(second('Я не палиндром')).toBe(false);
  });

  test('third', () => {
    expect(third('Казак')).toBe(true);
    expect(third('А роза упала на лапу Азора')).toBe(true);
    expect(third('Do geese see God?')).toBe(true);
    expect(third('Madam, I’m Adam')).toBe(true);

    expect(third('Test palindrome')).toBe(false);
    expect(third('Тест палиндрома')).toBe(false);
    expect(third('I’m not a palindrome')).toBe(false);
    expect(third('Я не палиндром')).toBe(false);
  });
});
