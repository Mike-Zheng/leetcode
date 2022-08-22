/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n === 1) return true;
  let str = n.toString(2);
  return /^100(00)*$/.test(str);
};
