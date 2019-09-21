// Create a Node class that has properties for the value stored in the Node, 
// and a pointer to the next Node. Within your LinkedList class, include a 
// head property. Upon instantiation, an empty Linked List should be created

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

/**
   * Insert value at the head of list
   * @param value 
   */
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++; 
  }

/**
   * Checks to see if list includes given value?
   * @param value 
   * @returns {boolean}
   */

  includes(value) {
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      if(currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    } return false;
  }

/**
   * Turns all the values from the list into a string
   * @returns {string}
   */
  toString() {
    let string = '';
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      string = string + currentNode.value;
      currentNode = currentNode.next;
    } return string;
  }

}

module.exports = { 
  Node,
  LinkedList,
};