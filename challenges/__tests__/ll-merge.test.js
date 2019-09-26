const mergeLists = require('../ll-merge/ll-merge');
const llModel = require('../ll-insertions/ll-insertions');


describe('Merge Lists', () => {
  it('will merge two lists when one is longer', () => {
    const listA = new llModel.LinkedList();
    listA.insert('hola');
    listA.insert('pineapple');
    listA.insert(5);
    listA.insert('bird');
    listA.insert('smile');

    const listB = new llModel.LinkedList();
    listB.insert(3);
    listB.insert('cat');
    listB.insert('frown');
    listB.insert('walnut');
    const result = mergeLists(listA, listB);
    expect(result.value).toBe('smile');
    expect(result.next.value).toBe('walnut');
    expect(result.next.next.value).toBe('bird');
    expect(result.next.next.next.value).toBe('frown');
    expect(result.next.next.next.next.value).toBe(5);
    expect(result.next.next.next.next.next.value).toBe('cat');
    expect(result.next.next.next.next.next.next.value).toBe('pineapple');
    expect(result.next.next.next.next.next.next.next.value).toBe(3);
    expect(result.next.next.next.next.next.next.next.next.value).toBe('hola');
  });


  it('will merge two lists when the second is longer', () => {
    const listA = new llModel.LinkedList();
    listA.insert(5);
    listA.insert('bird');
    listA.insert('smile');

    const listB = new llModel.LinkedList();
    listB.insert('hola');
    listB.insert('pineapple');
    listB.insert(3);
    listB.insert('cat');
    listB.insert('frown');
    listB.insert('walnut');
    const result = mergeLists(listA, listB);
    expect(result.value).toBe('smile');
    expect(result.next.value).toBe('walnut');
    expect(result.next.next.value).toBe('bird');
    expect(result.next.next.next.value).toBe('frown');
    expect(result.next.next.next.next.value).toBe(5);
    expect(result.next.next.next.next.next.value).toBe('cat');
    expect(result.next.next.next.next.next.next.value).toBe(3);
    expect(result.next.next.next.next.next.next.next.value).toBe('pineapple');
    expect(result.next.next.next.next.next.next.next.next.value).toBe('hola');
  });

  it('will merge two lists when one is empty', () => {
    const listA = new llModel.LinkedList();
    listA.insert(5);
    listA.insert('bird');
    listA.insert('smile');

    const listB = new llModel.LinkedList();
    const result = mergeLists(listA, listB);
    expect(result.value).toBe('smile');
    expect(result.next.value).toBe('bird');
    expect(result.next.next.value).toBe(5);
  });
});