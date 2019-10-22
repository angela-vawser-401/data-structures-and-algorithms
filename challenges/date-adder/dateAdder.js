let formulaTable = {
  s: (amount) => amount * 1000,
  m: (amount) => amount * 60 * 1000,
  h: (amount) => amount * 60 * 60 * 1000,
  d: (amount) => amount * 24 * 60 * 60 * 1000,
  w: (amount) => amount * 7 * 24 * 60 * 60 * 1000,
  M: (amount) => amount * 4 * 7 * 24 * 60 * 60 * 1000,
  y: (amount) => amount * 12 * 4 * 7 * 24 * 60 * 60 * 1000,
};

function dateAdder(dateObj, diff) {
  let diffArr = diff.match(/(\d+)(\w)/i);
  let amount = parseInt(diffArr[1]);
  let operator = diffArr[2];
  let dateDiff = formulaTable[operator](amount);
  return new Date(dateObj.valueOf() + dateDiff);
}

console.log(dateAdder(new Date(), '2d'));