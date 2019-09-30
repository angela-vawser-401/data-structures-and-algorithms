const { Stack, Queue } = require('../stack-and-queue/stacksAndQueues');

describe('Stacks and Queues', () => {
  it('pushes a node onto the top of a stack', () => {

    const firstStack = new Stack();
    firstStack.push('Angela');
    expect(firstStack.top.value).toBe('Angela');
  });

  it('pushes multiple nodes onto a stack', () => {
    const firstStack = new Stack();
    firstStack.push('Holy');
    firstStack.push('Cow');
    firstStack.push('Angela');
    expect(firstStack.top.value).toBe('Angela');
    expect(firstStack.top.next.value).toBe('Cow');
    expect(firstStack.top.next.next.value).toBe('Holy');
  });

  it('pops a node off the top of a stack', () => {
    const firstStack = new Stack();
    firstStack.push('Holy');
    firstStack.push('Cow');
    firstStack.push('Angela');
    const result = firstStack.pop();
    expect(result).toBe('Angela');
  });

  it('empties a stack after multiple pops', () => {
    const firstStack = new Stack();
    firstStack.push('Holy');
    firstStack.push('Cow');
    firstStack.push('Angela');
    firstStack.pop();
    firstStack.pop();
    firstStack.pop();
    const result = firstStack.pop();
    expect(result).toBe(null);
  });

  it('peeks the top value of a stack', () => {
    const firstStack = new Stack();
    firstStack.push('Holy');
    firstStack.push('Cow');
    firstStack.push('Angela');
    expect(firstStack.peek()).toBe('Angela');
  });

  it('can instatiate an empty stack', () => {
    const firstStack = new Stack();
    expect(firstStack.top).toBe(null);
  });

  it('takes a value and adds new node to the back of the queue', () => {
    const firstQueue = new Queue();
    firstQueue.push('Real');
    firstQueue.push('Good');
    firstQueue.push('Food');
    expect(firstQueue.enqueue('It/s')).toBe('Real');

  });

  // Can successfully enqueue into a queue

  // Can successfully enqueue multiple values into a queue

  // Can successfully dequeue out of a queue the expected value

  // Can successfully peek into a queue, seeing the expected value
  
  // Can successfully empty a queue after multiple dequeues
  
  // Can successfully instantiate an empty queue

});