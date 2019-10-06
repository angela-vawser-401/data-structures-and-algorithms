const { Stack, Queue } = require('../stack-and-queue/stacksAndQueues');

describe('Stacks and Queues', () => {
  it('pushes a node onto the top of a stack', () => {

    const testStack = new Stack();
    testStack.push('surprise');
    expect(testStack.top.value).toBe('surprise');
  });

  it('pushes multiple nodes onto a stack', () => {
    const testStack = new Stack();
    testStack.push('boom');
    testStack.push('pow');
    testStack.push('surprise');
    expect(testStack.top.value).toBe('surprise');
    expect(testStack.top.next.value).toBe('pow');
    expect(testStack.top.next.next.value).toBe('boom');
  });

  it('pops a node off the top of a stack', () => {
    const testStack = new Stack();
    testStack.push('boom');
    testStack.push('pow');
    testStack.push('surprise');
    const result = testStack.pop();
    expect(result).toBe('surprise');
  });

  it('empties a stack after multiple pops', () => {
    const testStack = new Stack();
    testStack.push('boom');
    testStack.push('pow');
    testStack.push('surprise');
    testStack.pop();
    testStack.pop();
    testStack.pop();
    const result = testStack.pop();
    expect(result).toBe(null);
  });

  it('peeks the top value of a stack', () => {
    const testStack = new Stack();
    testStack.push('boom');
    testStack.push('pow');
    testStack.push('surprise');
    expect(testStack.peek()).toBe('surprise');
  });

  it('can instatiate an empty stack', () => {
    const testStack = new Stack();
    expect(testStack.top).toBe(null);
  });

  it('enqueues a new node into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue('boom');
    expect(newQueue.front.value).toBe('boom');
  });

  it('enqueues multiple nodes onto a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue('boom');
    newQueue.enqueue('pow');
    expect(newQueue.front.value).toBe('boom');
    expect(newQueue.front.next.value).toBe('pow');
  });

  it('can dequeue the first node', () => {
    const newQueue = new Queue();
    newQueue.enqueue('boom');
    newQueue.enqueue('pow');
    const result = newQueue.dequeue();
    expect(result).toBe('boom');
  });

  it('can empty a queue after several dequeues', () => {
    const newQueue = new Queue();
    newQueue.enqueue('boom');
    newQueue.enqueue('pow');
    newQueue.dequeue();
    newQueue.dequeue();
    const result = newQueue.dequeue();
    expect(result).toBe('queue is empty');
  });

  it('can peek into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue('boom');
    newQueue.enqueue('pow');
    const result = newQueue.peek();
    expect(result).toBe('boom');
  });

  it('can instantiate a new queue', () => {
    const newQueue = new Queue();
    expect(newQueue.front).toBe(null);
  });

});