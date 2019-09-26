const binarySearch = require('../array-binary-search/arrayBinarySearch');

const array = [4, 8, 15, 16, 23, 42];
const key = 15;
const nextArray = [11, 22, 33, 44, 55, 66, 77];
const nextKey = 90;

describe('search for value in array ', () => {
  it('returns index of given value', () => {
    expect(binarySearch(array, key)).toEqual(2);
  });
  it('returns -1', () => {
    expect(binarySearch(nextArray, nextKey)).toEqual(-1);
  });
});