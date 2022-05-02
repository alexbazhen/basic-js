const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
   calculateDepth(arr) {
      function getIn(inArr, lvl) {
         if (!lvl) {
            lvl = 0;
         }
         if (Array.isArray(inArr)) {
            lvl = lvl + 1;
            let p = lvl;
            for (let i = 0; i < inArr.length; i++) {
               let c = inArr[i];
               let sublvl = getIn(c, lvl)
               p = Math.max(p, sublvl);
            }
            return p;
         } else {
            return lvl;
         }
      }
      return getIn(arr);
  }
}

module.exports = {
  DepthCalculator
};
