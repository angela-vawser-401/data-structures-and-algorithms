const { BinaryTree } = require('../tree/tree');
const { fizzbuzzTree } = require('../fizzbuzz-tree/fizzbuzzTree');

describe('fizzbuzz Tree', () => {
  it('determines if value of each node is divisible by 3, 5 or both', () => {
    const tree = new BinaryTree();
    tree.add(5);
    tree.add(15);
    tree.add(3);

    expect(fizzbuzzTree(tree.root.left)).toBe('Fizz');
    expect(fizzbuzzTree(tree.root.right)).toBe('FizzBuzz');
    expect(fizzbuzzTree(tree.root)).toBe('Buzz');
  });
}); 