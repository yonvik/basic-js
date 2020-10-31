const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let addedValue = String(value);
    addedValue = addedValue === 'function () {}' ? 'function() {}' : addedValue;
    this.chain.push(addedValue);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position < 0 ||
      position >= this.chain.length
    ) {
      this.chain = [];
      throw new Error('invalid position');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    const reversed = this.chain.reverse();
    this.chain = reversed;
    return this;
  },
  finishChain() {
    const result = this.chain.reduce((string, item, index) => {
      const ending = index === this.chain.length - 1 ? '' : '~~';
      return `${string}( ${item} )${ending}`;
    }, '');
    this.chain = [];
    return result;
  },
};

module.exports = chainMaker;