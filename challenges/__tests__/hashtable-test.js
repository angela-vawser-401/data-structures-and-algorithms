const Hashtable = require('../hashtable/hashtable');

describe('Hash table functionality', () => {
  it('hashes a key', () => {
    const testTable = new Hashtable();
    expect(testTable.hash('winner winner')).toBe(3);
  });

  it('adds a key value pair', () => {
    const testTable = new Hashtable();
    testTable.add('winner winner', 'test');
    expect(testTable.get('winner winner')).toEqual(['test']);
  });

  it('adds value when the key already exists', () => {
    const testTable = new Hashtable();
    testTable.add('winner winner', 'test1');
    testTable.add('winner winner', 'test2');
    expect(testTable.get('winner winner')).toEqual(['test1', 'test2']);
  });

  it('returns null in no key does not exists', () => {
    const testTable = new Hashtable();
    expect(testTable.get('winner winner')).toEqual(null);
  });

  it('checks if a hash table contains a key', () => {
    const testTable = new Hashtable();
    testTable.add('winner winner', 'test');
    expect(testTable.contains('winner winner')).toBe(true);
    expect(testTable.contains('fail')).toBe(false);
  });
});