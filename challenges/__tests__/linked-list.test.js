// Can successfully instantiate an empty linked list
const linkedListModel = require('./linked-list');

describe('Linked List', () => {
  it('will instantiate an empty list', () => {
    const list = new linkedListModel.LinkedList();
    
    const result = {
      head: null,
      size: 0,
    };
    expect(list).toEqual(result);
  });

// Can properly insert into the linked list
  it('will insert a value into the list', () => {
    const value = 3;
    const list = new linkedListModel.LinkedList();
    list.insert(value);
    expect(list.size).toBe(1);
  });

// The head property will properly point to the first node in the linked list
  it('the head property points to first value', () => {
    const value = 3;
    const list = new linkedListModel.LinkedList();
    list.insert(value);
    expect(list.head.value).toBe(value);
  });

// Can properly insert multiple nodes into the linked list
  it('inserts multiple nodes into the linked list', () => {
    const list = new linkedListModel.LinkedList();
    const valueA = 3;
    const valueB = 'red';
    const valueC = 'favorite';
    list.insert(valueA);
    list.insert(valueB);
    list.insert(valueC);
    expect(list.size).toBe(3);
  });

// Will return true when finding a value within the linked list that exists
  it('will return true when finding a value in a list', () => {
    const list = new linkedListModel.LinkedList();
    list.insert(5);
    expect(list.includes(3)).toBe(true);
  });

// Will return false when searching for a value in the linked list that does not exist
  it('will return false for value that does not exist', () => {
    const list = new linkedListModel.LinkedList();
    list.insert(3);
    expect(list.includes(13)).toBe(false);
  });

// Can properly return a collection of all the values that exist in the linked list
  it('will return all the values in the list', () => {
    const list = new linkedListModel.LinkedList();
    const valueOne = 3;
    const valueTwo = 'red';
    const valueThree = 'favorite';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    expect(list.toString()).toBe('favoritered3');
  });

// Adds a new node with given value to the end of the list
  it('Adds a new node with the given value to the end of the list', () => {
    const testList = new LinkedList();
    const tail = 5;
    testList.append(1);
    testList.append(3);
    testList.append(2);
    testList.append(tail);

    expect(testList.toString()).toEqual('1, 3, 2, 5');
  });

// Adds a new node with given newValue before the first value node
  it('Add a new node with the given newValue before the first value node', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(3);
    testList.append(2);
    testList.append(4);

    testList.insertBefore(3, 2);

    expect(testList.toString()).toEqual('1, 2, 3, 2, 4');
  });

// Adds a new node with given newValue after the first value node
  it('Add a new node with the given newValue after the first value node', () => {
    const testList = new LinkedList();
    testList.insert(1);
    testList.insert(3);
    testList.insert(2);
    testList.insertAfter(3, 7);
    expect(testList.toString()).toEqual('1, 3, 7, 2');
  });

  it('gets kth from end', () => {
    const testList = new LinkedList();
    testList.insert(1);
    testList.insert(2);
    testList.insert(3);
    testList.insert(4);
    testList.insert(5);

    expect(testList.kthFromEnd(testList, 2)).toBe(3);
  });

  it('Where k is greater than the length of the linked list', () => {
    const testList = new LinkedList();
    testList.insert(1);
    testList.insert(2);
    testList.insert(3);
    testList.insert(4);
    testList.insert(5);

    expect(() => testList.kthFromEnd(testList, 6)).toThrowError('input is too big');
  });

  it('Where k and the length of the list are the same', () => {
    const testList = new LinkedList();
    testList.insert(1);
    testList.insert(2);
    testList.insert(3);
    testList.insert(4);
    testList.insert(5);

    expect(() => testList.kthFromEnd(testList, 5)).toThrowError('input cannot be the same length as list');
  });
  
  it('Where k is not a positive integer', () => {
    const testList = new LinkedList();
    testList.insert(1);
    testList.insert(2);
    testList.insert(3);
    testList.insert(4);
    testList.insert(5);
    
    expect(() => testList.kthFromEnd(testList, -1)).toThrowError('input is way too small');
  });

  it('here the linked list is of a size 1', () => {
    const testList = new LinkedList();
    testList.insert(1);

    expect(() => testList.kthFromEnd(testList, 1)).toThrowError('make list longer');
  });
});