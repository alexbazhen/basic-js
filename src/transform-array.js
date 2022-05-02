const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/*arr*/) {
   throw new NotImplementedError('Not implemented');
   //if (arr instanceof Array) {
   //   let oldArray = arr;
   //   let newArray = [];
   //   for (let i = 0; i < oldArray.length; i++) {
   //      if (typeof oldArray[i] == 'number') {
   //         newArray.push(oldArray[i]);
   //      } else if (oldArray[i] === '--double-next') {
   //         if (typeof oldArray[i + 1] == 'number') {
   //            newArray.push(oldArray[i + 1]);
   //         }
   //      } else if (oldArray[i] === '--double-prev') {
   //         if (typeof oldArray[i - 1] == 'number') {
   //            newArray.push(oldArray[i - 1]);
   //         }
   //      } else if (oldArray[i] === '--discard-next') {
   //         oldArray[i + 1] = false;
   //      } else if (oldArray[i] === '--discard-prev') {
   //         newArray.pop();
   //      }
   //   }
   //   return newArray;
   //} else {
   //   throw new Error("'arr' parameter must be an instance of the Array!");
   //}
}

module.exports = {
  transform
};
