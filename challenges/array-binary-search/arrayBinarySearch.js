function binarySearch(array, key) {
  
  let start = 0, end = array.length - 1;

  while (start <= end) { 
    let middle = Math.floor((start + end) / 2); 

    if (key === array[middle]) {
      return middle;
    } else if(key > array[middle]) {
      start = middle + 1;
    } else if(key < array[middle]) {
      end = mid - 1; 
    } 
  }
  return -1; 

} 

const array = [4,8,15,16,23,42];
const key = 15;
const nextArray = [11,22,33,44,55,66,77];
const nextKey = 90;

console.log(binarySearch(array, key));
console.log(binarySearch(nextArray, nextKey));

module.exports = binarySearch;