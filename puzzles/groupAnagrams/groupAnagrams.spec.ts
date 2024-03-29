import first from './groupAnagrams.first';
import second from './groupAnagrams.second';

describe('groupAnagrams', () => {
  test('first', () => {
    expect(first(['сон', 'нос', 'сорт', 'трос', 'торт', 'рост'])).toStrictEqual([['сон', 'нос'], ['сорт', 'трос', 'рост'], ['торт']]);
    expect(first(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  });

  test('second', () => {
    expect(second(['сон', 'нос', 'сорт', 'трос', 'торт', 'рост'])).toStrictEqual([['сон', 'нос'], ['сорт', 'трос', 'рост'], ['торт']]);
    expect(second(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  });
});
