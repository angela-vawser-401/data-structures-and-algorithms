const a = ['rat', 'dog', 'rooster', 'monkey', 'goat', 'horse', 'snake', 'dragon', 'rabbit', 'tiger', 'ox']
const b = [2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009]

function reverseArray(arr) {
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArray(a));
console.log(reverseArray(b));