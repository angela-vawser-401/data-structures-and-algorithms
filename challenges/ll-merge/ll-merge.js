const llModel = require('../ll-insertions/ll-insertions');

const listA = new llModel.LinkedList();
const valueA = 5;
const valueB = 'bird';
const valueC = 'smile';
listA.insert(valueA);
listA.insert(valueB);
listA.insert(valueC);

const listB = new llModel.LinkedList();
const valueD = 3;
const valueE = 'cat';
const valueF = 'frown';
listB.insert(valueD);
listB.insert(valueE);
listB.insert(valueF);
listB.insert('walnut');

function mergeLists(listA, listB) {
  const newList = new llModel.LinkedList();
  let currentA = listA.head;
  let currentB = listB.head;

  if(!listA.head) {
    return listB.head;
  }

  if(!listB.head) {
    return listA.head;
  }

  while(currentA.next !== null && currentB.next !== null) {
    newList.append(currentA.value);
    newList.append(currentB.value);
    currentA = currentA.next;
    currentB = currentB.next;
  }
  newList.append(currentA.value);
  newList.append(currentB.value);

  if(listA.size > listB.size) {
    currentA = currentA.next;
    while(currentA.next) {
      newList.append(currentA.value);
      currentA = currentA.next;
    }
    newList.append(currentA.value);
  }

  if(listB.size > listA.size) {
    currentB = currentB.next;
    while(currentB.next) {
      newList.append(currentB.value);
      currentB = currentB.next;
    }
    newList.append(currentB.value);
  }
  
  return newList.head;
}

mergeLists(listA, listB);

module.exports = mergeLists;