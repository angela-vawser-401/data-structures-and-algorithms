const { Stack } = require('../stack-and-queue/stacksAndQueues');

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

});