/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 * toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
 * toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
 */

function toCamelCase(str) {
  return str.split(/[\_||-]/g).reduce((s, v, i) => {
    if (i === 0) {
      return s + v;
    }
    return s + v.charAt(0).toUpperCase() + v.slice(1, v.length);
  }, '');
}

function toCamelCase2(str) {
  const regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

function toCamelCase3(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

toCamelCase('the-stealth-warrior'); // returns "theStealthWarrior"
toCamelCase2('The_Stealth_Warrior'); // returns "TheStealthWarrior"
toCamelCase3('The_Stealth-warrior'); // returns "TheStealthWarrior"
