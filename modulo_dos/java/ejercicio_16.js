class Group {
    val = [];
  
    add(value) {
      if (!this.has(value)) {
        this.val.push(value);
      }
    }
  
    delete(value) {
      this.val = this.val.filter(v => v !== value);
    }
  
    has(value) {
      return this.val.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  
    [Symbol.iterator]() {
      return new GroupIterator(this.val);
    }
  }
  
  class GroupIterator {
    valer;
    #position;
  
    constructor(miembros) {
      this.valer = miembros;
      this.#position = 0;
    }
  
    next() {
      if (this.#position >= this.valer.length) {
        return {done: true};
      } else {
        let result = {value: this.valer[this.#position],
        done: false};

        this.#position++;
        return result;
      }
    }
}
  
for (let value of Group.from(['1', '2', '3'])) {
console.log(value);
}

