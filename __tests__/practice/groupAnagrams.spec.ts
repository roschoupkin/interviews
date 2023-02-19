import { groupAnagrams } from '@practice/groupAnagrams';

describe('groupAnagrams', () => {
  it('Return groups of anagrams', () => {
    expect(groupAnagrams(['сон', 'нос', 'сорт', 'трос', 'торт', 'рост'])).toStrictEqual([
      ['сон', 'нос'],
      ['сорт', 'трос', 'рост'],
      ['торт'],
    ]);
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  });
});
