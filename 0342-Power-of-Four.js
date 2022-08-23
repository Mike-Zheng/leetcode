/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function (n) {
  return /^1(0)*$/.test(n.toString(4));
};
