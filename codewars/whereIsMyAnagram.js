/**
 * What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
 * 'abba' & 'baab' == true
 * 'abba' & 'bbaa' == true
 * 'abba' & 'abbba' == false
 * 'abba' & 'abca' == false
 */

function anagrams(word, words) {
  const chars = [...word].reduce((w, c) => {
    if (w[c]) {
      w[c]++;
    } else {
      w[c] = 1;
    }
    return w;
  }, {});
  return words.filter(w => {
    const mw = Object.entries(chars).reduce((rw, [c, v]) => {
      const regex = new RegExp(c, 'g');
      if ((rw.match(regex) || []).length === v) {
        return rw.replace(regex, '');
      }
      return rw;
    }, w);
    return !mw;
  });
}

String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams2(word, words) {
  return words.filter(function(x) {
    return x.sort() === word.sort();
  });
}

function anagrams3(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']); // ['aabb', 'bbaa']
anagrams2('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']); // ['carer', 'racer']
anagrams3('laser', ['lazing', 'lazy',  'lacer']); // []
