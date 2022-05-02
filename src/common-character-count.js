const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/*s1, s2*/) {
   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   //let stringAr1 = {};
   //let stringAr2 = {};
   //for (let i = 0; i < s1; i++) {
   //   if (stringAr1[s1[i]]) {
   //      stringAr1[s1[i]] = stringAr1[s1[i]] + 1;
   //   } else {
   //      stringAr1[s1[i]] = 1;
   //   }
   //}
   //for (let i = 0; i < s2; i++) {
   //   if (stringAr2[s2[i]]) {
   //      stringAr2[s2[i]] = stringAr2[s2[i]] + 1;
   //   } else {
   //      stringAr2[s2[i]] = 1;
   //   }
   //}
}

module.exports = {
  getCommonCharacterCount
};
