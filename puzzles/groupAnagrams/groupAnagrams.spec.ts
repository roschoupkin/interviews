import { groupAnagrams, groupAnagrams2 } from './groupAnagrams';

describe('groupAnagrams', () => {
  it('Return groups of anagrams', () => {
    expect(groupAnagrams(['сон', 'нос', 'сорт', 'трос', 'торт', 'рост'])).toStrictEqual([
      ['сон', 'нос'],
      ['сорт', 'трос', 'рост'],
      ['торт'],
    ]);
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  });

  it('Return groups of anagrams', () => {
    expect(groupAnagrams2(['сон', 'нос', 'сорт', 'трос', 'торт', 'рост'])).toStrictEqual([
      ['сон', 'нос'],
      ['сорт', 'трос', 'рост'],
      ['торт'],
    ]);
    expect(groupAnagrams2(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  });
});
