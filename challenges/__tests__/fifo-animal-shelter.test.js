const AnimalShelter = require('../fifo-animal-shelter/fifoAnimalShelter');

describe('Animal shelter', () => {
  it('enqueue adds an animal to the front of the queue', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue('dog');
    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');
    expect(animalShelter.front).toEqual({ value: 'dog', next: { value: 'dog', next: { value: 'cat', next: null }}});
  });
  it('dequeue returns the first animal with the specified value', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue('dog');
    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');
    expect(animalShelter.dequeue('cat')).toBe('cat');
    expect(animalShelter.front).toEqual({ value: 'dog', next: { value: 'dog', next: null}});
  });
});