/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);

  let pre = null;
  let count = 0;
  for (let item of points) {
    if (!pre || item[0] > pre) {
      count++;
      pre = item[1];
    } else {
      pre = Math.min(item[1], pre);
    }
  }

  return count;
};
