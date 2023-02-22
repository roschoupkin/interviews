/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 * pigIt('Pig latin is cool');  // igPay atinlay siay oolcay
 * pigIt('Hello world !');  // elloHay orldway !
 */

function pigIt(str) {
  return str
    .split(' ')
    .map((w) => (/\W/.test(w) ? w : `${w.slice(1, w.length)}${w[0]}ay`))
    .join(' ');
}

function pigIt2(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
}

function pigIt3(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt2('Hello world !'); // elloHay orldway !
pigIt3('Hello world !'); // elloHay orldway !
