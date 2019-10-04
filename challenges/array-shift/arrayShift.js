function insertShiftArray(array, value) {
  for(let i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  return array;
}

module.exports = {
  insertShiftArray,
};