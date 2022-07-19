/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function (numRows) {
  let ans = [];
  for (let i = 0; i < numRows; i++) {
    if (i == 0) {
      ans.push([1]);
      continue
    }

    let data = [...ans[i - 1], 0];
    let dataReverse = [0, ...ans[i - 1]];

    ans.push(
      data.map((_, i) => {
        return data[i] + dataReverse[i];
      })
    );
  }

  return ans;
};
