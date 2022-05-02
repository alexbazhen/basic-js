const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
   sumChain: [],
   getLength() {
      return this.sumChain.length;
   },
   addLink(value) {
      this.sumChain.push(value);
      return this;
   },
   removeLink(position) {
      if (position < 1 || position >= this.sumChain.length || isNaN(position)) {
         this.sumChain = [];
         throw new Error("You can't remove incorrect link!");
      } else {
         this.sumChain = this.sumChain.filter((e, i) => i !== position - 1);
         return this;
      }
   },
   reverseChain() {
      this.sumChain.reverse();
      return this;
   },
   finishChain() {
      const finish = this.sumChain.map((e) => `( ${e} )`).join("~~");
      this.sumChain = [];
      return finish;
   }
};

module.exports = {
  chainMaker
};
