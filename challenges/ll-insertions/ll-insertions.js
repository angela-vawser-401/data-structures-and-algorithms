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
   * Checks to see if list includes given value
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

  append(value) {
    const node = new Node(value);

    if(this.size) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
    return node.value;
  }

  insertBefore(value, newVal) {
    let newNode = new Node(newVal);
    let node = this.head;
    
    if(node.value === value) {
      this.insert(newVal);
    }
    while(node.next) {
      if(!this.head) {
        this.head = new Node(newVal);
        return;
      }

      if(node.next.value === value) {
        newNode.next = node.next;
        node.next = newNode;
        node = newNode;
      }
      node = node.next;
    }
  }

  insertAfter(value, newVal) {
    let node = this.head;
    while(node) {
      if(!this.head) {
        this.head = new Node(newVal);
        return;
      }

      if(node.value === value) {
        let newNode = new Node(newVal);
        newNode.next = node.next;
        node.next = newNode; 

        return node;
      }
      node = node.next;
    }
  }

  kthFromEnd(ll, k) {
    let node = ll.head;
    let index = 0;
    let res;
    console.log(ll);
    if(k < 0) {
      throw new Error('input is way too small');
    }

    if(ll.size === 1) {
      throw new Error('make list longer');
    }

    if(k === ll.size) {
      throw new Error('input cannot be the same length as list');
    }

    if(k > ll.size) {
      throw new Error('input is too big');
    }

    while(node) {

      if(index === k) {
        res = ll.head;
      }
      else if(index - k > 0) {
        res = res.next;
      }
      index++;

      node = node.next;
    }
    return res.value;
  }
}

module.exports = { 
  Node,
  LinkedList,
};