/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  return str1.substring(0, gcd(str1.length, str2.length));
};

function gcd(x, y) {
  if (y === 0) return x;
  return gcd(y, x % y);
}
