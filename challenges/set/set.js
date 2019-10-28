class Set {
  constructor(array) {
    this.array = array;
  }

  add(value) {
    if(!this.array.includes(value)) this.array.push(value);
  }

  remove(value) {
    if(this.array.includes(value)) {
      const idx = this.array.indexOf(value);
      this.array.splice(idx, 1);
    }
  }

  has(value) {
    return this.array.includes(value);
  }

  intersection(set) {
    let newSet = new Set([]);
    this.array.forEach(val => {
      if(set.array.includes(val)) newSet.add(val);
    });
    return newSet;
  }

  union(set) {
    let newSet = new Set([]);
    this.array.forEach(val => {
      if(!newSet.has(val)) newSet.add(val); 
    });
    set.array.forEach(val => {
      if(!newSet.has(val)) newSet.add(val);
    });
    return newSet;
  }

  difference(set) {
    let newSet = new Set([]);
    this.array.forEach(val => {
      if(!set.has(val)) newSet.add(val);
    });
    set.array.forEach(val => {
      if(!this.has(val)) newSet.add(val);
    });
    return newSet;
  }

  static intersection(set1, set2) {
    let newSet = new Set([]);
    set1.array.forEach(val => {
      if(set2.has(val)) newSet.add(val);
    });
    return newSet;
  }

  static union(set1, set2) {
    let newSet = new Set([]);
    set1.array.forEach(val => {
      if(!newSet.has(val)) newSet.add(val);
    });
    set2.array.forEach(val => {
      if(!newSet.has(val)) newSet.add(val);
    });
    return newSet;
  }

  static difference(set1, set2) {
    let newSet = new Set([]);
    set1.array.forEach(val => {
      if(!set2.has(val)) newSet.add(val);
    });
    set2.array.forEach(val => {
      if(!set1.has(val)) newSet.add(val);
    });
    return newSet;
  }

}

module.exports = { 
  Set,
};