const { Set } = require('../set/set');

describe('Set methods', () => {
  it('creates a new set', () => {
    const data = new Set([1, 2, 3]);
    expect(data.array).toEqual([1, 2, 3]);
  });
  
  it('should add to a set', () => {
    const data = new Set([1, 2, 3]);
    data.add(4);
    expect(data.array).toEqual([1, 2, 3, 4]);
  });
  
  it('prevents duplicate when adding', () => {
    const data = new Set([1, 2, 3]);
    data.add(1);
    expect(data.array).toEqual([1, 2, 3]);
  });
  
  it('removes a value from a set', () => {
    const data = new Set([1, 2, 3]);
    data.remove(1);
    expect(data.array).toEqual([2, 3]);
  });
  
  it('checks if set has value', () => {
    const data = new Set([1, 2, 3]);
    const check = data.has(1);
    expect(check).toEqual(true);
  });

  it('should return instance of the intersection', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const intersection = set1.intersection(set2);
    expect(intersection.array).toEqual([1, 2]);
  });

  it('should return instance of the union', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const union = set1.union(set2);
    expect(union.array).toEqual([1, 2, 3, 4]);
  });

  it('should return instance of the difference', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 5]);
    const difference = set1.difference(set2);
    expect(difference.array).toEqual([3, 5]);
  });

  it('should return static of intersection', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const result = Set.intersection(set1, set2);
    expect(result.array).toEqual([1, 2]);
  });

  it('should return static union', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const result = Set.union(set1, set2);
    expect(result.array).toEqual([1, 2, 3, 4]);
  });

  it('should return static difference', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const result = Set.difference(set1, set2);
    expect(result.array).toEqual([3, 4]);
  });

});