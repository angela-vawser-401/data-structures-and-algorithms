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

})