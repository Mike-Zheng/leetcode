/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  var isVal = (list) => {
    let l = list.length - 1;
    let m = Math.floor(list.length / 2);
    for (let i = 0; i < m; i++) {
      if (list[i] != list[l - i]) return false;
    }
    return true;
  };

  let leng = s.length - 1;
  let mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    if (s[i] != s[leng - i]) {
      return (
        isVal(s.slice(0, i).concat(s.slice(i + 1))) ||
        isVal(s.slice(0, leng - i).concat(s.slice(leng - i + 1)))
      );
    }
  }

  return true;
};
