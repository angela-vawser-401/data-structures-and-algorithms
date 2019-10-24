const dateAdder = require('../date-adder/dateAdder');

describe('Date Adder Function', () => {

  it('can add seconds to a date', () => {
    const dateObj = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diff = '10s';
    const result = dateAdder(dateObj, diff);
    expect(result).toEqual(new Date(1986, 7, 17, 12, 33, 32, 45));
  });
  it('can add minutes to a date', () => {
    const dateObj = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diff = '10m';
    const result = dateAdder(dateObj, diff);
    expect(result).toEqual(new Date(1986, 7, 17, 12, 43, 22, 45));
  });

  it('can add hours to a date', () => {
    const dateObj = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diff = '10h';
    const result = dateAdder(dateObj, diff);
    expect(result).toEqual(new Date(1986, 7, 17, 22, 33, 22, 45));
  });

  it('can add days to a date', () => {
    const dateObj = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diff = '10d';
    const result = dateAdder(dateObj, diff);
    expect(result).toEqual(new Date(1986, 7, 27, 12, 33, 22, 45));
  });

  it('can add weeks to a date', () => {
    const dateObj = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diff = '10w';
    const result = dateAdder(dateObj, diff);
    expect(result).toEqual(new Date(1986, 9, 26, 12, 33, 22, 45));
  });

  it('can add months to a date', () => {
    const dateObj = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diff = '10M';
    const result = dateAdder(dateObj, diff);
    expect(result).toEqual(new Date(1987, 5, 17, 12, 33, 22, 45));
  });

  it('can add years to a date', () => {
    const dateObj = new Date(1986, 7, 17, 12, 33, 22, 45);
    const diff = '10y';
    const result = dateAdder(dateObj, diff);
    expect(result).toEqual(new Date(1996, 7, 17, 12, 33, 22, 45));
  });

});