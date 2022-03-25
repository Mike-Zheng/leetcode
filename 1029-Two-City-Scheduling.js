/**
 * @param {number[][]} costs
 * @return {number}
 */
 var twoCitySchedCost = function (costs) {
  var df = costs.map((d, index) => {
    return [index, d[0] - d[1]];
  });

  var sl = df.sort((a, b) => a[1] - b[1]);

  var ans =
    sl
      .slice(0, sl.length / 2)
      .reduce((acc, item) => acc + costs[item[0]][0], 0) +
    sl.slice(sl.length / 2).reduce((acc, item) => acc + costs[item[0]][1], 0);

  return ans;
};
