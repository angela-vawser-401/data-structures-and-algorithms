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

// define a method alled toString that takes in no arguments 
// and returns a string representing all the values in the Linked List


// Catch and handle any exceptions and return a printed value or operation 
// which cleanly represents the state and either stops execution cleanly, or 
// provides the user with clear direction and output


}