const leftJoin = require('../left-join/leftJoin');
const HashTable = require('../hashtable/hashtable');

describe('Left Join Function', () => {
  it('finds the common values in two hash tables', () => {
    const tableOne = new HashTable();
    tableOne.add('fond', 'enamored');
    tableOne.add('diligent', 'employed');
    tableOne.add('guide', 'usher');
    tableOne.add('outfit', 'garb');

    const tableTwo = new HashTable();
    tableTwo.add('fond', 'averse');
    tableTwo.add('wrath', 'delight');
    tableTwo.add('diligent', 'idle');
    tableTwo.add('guide', 'follow');
    tableTwo.add('flow', 'jam');

    expect(leftJoin(tableOne, tableTwo)).toEqual([
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', null],
      ['outfit', 'garb', null],
      ['diligent', 'employed', 'idle'],
    ]);
  });
});
