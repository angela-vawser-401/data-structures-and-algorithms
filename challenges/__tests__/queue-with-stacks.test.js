const { PseudoQueue } = require('./queue-with-stacks');

describe('Queue with Stacks Model', () => {
  it('enqueues a value into stack one', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.inStack.push('boom');
    pseudoQueue.inStack.push('pow');
    pseudoQueue.inStack.push('surprise');
    pseudoQueue.enqueue(5);
    expect(pseudoQueue.inStack.top.value).toBe('surprise');
    expect(pseudoQueue.inStack.top.next.value).toBe('pow');
    expect(pseudoQueue.inStack.top.next.next.value).toBe('boom');
    expect(pseudoQueue.inStack.top.next.next.next.value).toBe(5);
  });

  it('dequeues a stack', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.inStack.push('boom');
    pseudoQueue.inStack.push('pow');
    pseudoQueue.inStack.push('surprise');
    const result = pseudoQueue.dequeue();
    expect(pseudoQueue.inStack.top.value).toBe('surprise');
    expect(pseudoQueue.inStack.top.next.value).toBe('pow');
    expect(pseudoQueue.inStack.top.next.next).toBe(null);
    expect(result.value).toBe('boom');
  });

});