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
    val;
    #position;
  
    constructor(members) {
      this.val = members;
      this.#position = 0;
    }
  
    next() {
      if (this.#position >= this.val.length) {
        return {done: true};
      } else {
        let result = {value: this.val[this.#position],
                      done: false};
        this.#position++;
        return result;
      }
    }
  }
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  