/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let length = s.length;

  let t = s.split("").reverse().join("");

  for (let i of s) {
    if (s.indexOf(i) + t.indexOf(i) === length - 1) {
      return s.indexOf(i);
    }
  }

  return -1;
};