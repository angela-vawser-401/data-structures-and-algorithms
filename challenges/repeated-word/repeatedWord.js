function repeatedWord(str) {
  const arr = str.toLowerCase().replace(/[.,#!$%^&*;:{}=\-_`~()]/g, '').split(' ');
  const storage = {};
  for(let i = 0; i < arr.length; i++) {
    if(storage[arr[i]]) return arr[i];
    else storage[arr[i]] = 1;
  }
  return null;
}

module.exports = repeatedWord;