/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  return n === 1 ? true : /^100(00)*$/.test(n.toString(2));
};


