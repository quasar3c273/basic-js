const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || !isFinite(position)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain = this.chain.filter((item, index) => index !== (position - 1))//?
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('').slice(0,-2);
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
