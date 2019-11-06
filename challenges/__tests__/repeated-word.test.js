const repeatedWord = require('../repeated-word/repeatedWord');

describe('repeated-word function test', () => {
  it('finds the first repeated word in a string', () => {
    const str = 'Hello, this is a test to check for a repeated word';
    const strTwo = 'One, two, three, four five, two, three, four, five';
    const strThree = 'easy come, easy go';
    expect(repeatedWord(str)).toBe('a');
    expect(repeatedWord(strTwo)).toBe('two');
    expect(repeatedWord(strThree)).toBe('easy');

  });
});