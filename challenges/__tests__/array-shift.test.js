const { insertShiftArray } = require('../array-shift/arrayShift');

describe('shift array', () => {


  it('adds  the value in the first position of the array', () => {
    expect(insertShiftArray([1, 2, 3], 100)).toEqual([100, 1, 2, 3]);
    expect(insertShiftArray(['a', 'b', 42], true)).toEqual([true, 'a', 'b', 42]);
  });

  it('does not return in the wrong order', () => {
    expect(insertShiftArray([1, 2, 3], 4)).not.toBe([1, 2, 3, 4]);
  });
});