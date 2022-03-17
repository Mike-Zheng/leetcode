/**
 * @param {string} s
 * @return {number}
 */
 var scoreOfParentheses = function (s) {
  var ar = [...s];
  var sta = [];
  var flg = true;
  var cur = 0;
  var ans = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === "(") {
      flg = true;
      sta.push(cur);
      cur++;
    } else if (ar[i] == ")") {
      var dep = sta.pop();
      cur--;
      if (flg) {
        ans += Math.pow(2, dep);
        flg = false;
      }
    }
  }

  return ans;
};
