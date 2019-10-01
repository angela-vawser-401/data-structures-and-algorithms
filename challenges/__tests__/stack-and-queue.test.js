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

  it('can instatiate an empty stack', () => {
    const testStack = new Stack();
    expect(testStack.top).toBe(null);
  });

  it('enqueues a new node into the queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue('whoa');
    expect(newQueue.front.value).toBe('whoa');
  });

  it('enqueues multiple nodes into the queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue('boom');
    newQueue.enqueue('pow');
    expect(newQueue.front.value).toBe('boom');
    expect(newQueue.front.next.value).toBe('pow');
  });

  it('dequeues the first node', () => {
    const newQueue = new Queue();
    newQueue.enqueue('surprise');
    newQueue.enqueue('fool');
    const result = newQueue.dequeue();
    expect(result).toBe('surprise');
  });

  it('empties the queue after several dequeues', () => {
    const newQueue = new Queue();
    newQueue.enqueue('boom');
    newQueue.enqueue('pow');
    newQueue.dequeue();
    newQueue.dequeue();
    const result = newQueue.dequeue();
    expect(result).toBe('the queue is empty');
  });

  it('peeks into the queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue('boom');
    newQueue.enqueue('pow');
    const result = newQueue.peek();
    expect(result).toBe('boom');
  });

  it('instantiates a new queue', () => {
    const newQueue = new Queue();
    expect(newQueue.front).toBe(null);
  });

});