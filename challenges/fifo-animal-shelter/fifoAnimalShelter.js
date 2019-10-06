const { Node } = require('../linked-list/linkedList');

class AnimalShelter {
  constructor() {
    this.front = null;
  }
  enqueue(animal) {
    const newNode = new Node(animal, null);
    let tail = this.front;
    if(!this.front) {
      this.front = newNode;
    } else {
      while(tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
    return this.front;
  }
  dequeue(pref) {
    if(pref !== 'cat' && pref !== 'dog') {
      return null;
    }
    let result;
    let current = this.front;
    let previous;
    while(current.value !== pref) {
      previous = current;
      current = current.next;
    }
    result = current.value;
    previous.next = current.next;
    return result;
  }
}

module.exports = AnimalShelter;