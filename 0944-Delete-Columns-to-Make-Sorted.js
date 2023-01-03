/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let delCount = 0;
  const m = strs.length;
  const n = strs[0].length;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m - 1; i++) {
      let str = strs[i][j];
      let strNext = strs[i + 1][j];
      if (str.charAt(0) > strNext.charAt(0)) {
        delCount++;
        break;
      }
    }
  }

  return delCount;
};
