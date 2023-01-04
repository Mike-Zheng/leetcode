// Runtime165 ms
// Beats
// 86.27%
// Memory56.1 MB
// Beats
// 84.31%

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  const hT = tasks.reduce((acc, item) => {
    if (acc[item]) acc[item]++;
    else acc[item] = 1;
    return acc;
  }, {});
  let totalCount = 0;
  let keys = Object.keys(hT);
  for (k = 0; k < keys.length; k++) {
    let count = hT[keys[k]];
    let m = Math.floor(count / 2);
    for (let i = 0; i <= m; i++) {
      if ((count - i * 2) % 3 == 0) {
        totalCount = totalCount + i + (count - i * 2) / 3;
        break;
      }
      if (i == m) {
        if (count % 2 === 0) {
          totalCount = totalCount + count / 2;
        } else {
          return -1;
        }
      }
    }
  }
  return totalCount;
};
