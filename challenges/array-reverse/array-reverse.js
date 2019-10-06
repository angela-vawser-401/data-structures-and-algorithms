const a = ['rat', 'pig', 'dog', 'rooster', 'monkey', 'goat', 'horse', 'snake', 'dragon', 'rabbit', 'tiger', 'ox'];
const b = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009];

function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  }
  return arr;
}

console.log(reverseArray(a));
console.log(reverseArray(b));

