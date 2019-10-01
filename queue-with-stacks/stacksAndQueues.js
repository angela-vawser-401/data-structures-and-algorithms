class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    if(!this.top) this.top = node;
    else {
      node.next = this.top;
      this.top = node;
    } 
  }

  pop() {
    let result;
    if(this.top) {
      result = this.top.value;
      this.top = this.top.next;
    }
    else result = null;
    return result;
  }

  peek() {
    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    let firstNode = this.front;
    if(!firstNode) {
      this.front = newNode;
    }
    else {
      while(firstNode.next) {
        firstNode = firstNode.next;
      }
      firstNode.next = new Node(value);
    }
  }

  dequeue() {
    let firstNode = this.front;
    let result;
    if(!firstNode) {
      return 'the queue is empty';
    } else {
      result = firstNode.value;
      this.front = firstNode.next;
    }
    return result;
  }

  peek() {
    return this.front.value;
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};