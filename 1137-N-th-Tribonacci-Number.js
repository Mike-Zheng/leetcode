/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let list = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    let n = list[i - 3] + list[i - 2] + list[i - 1];
    list.push(n);
  }

  return list[n];
};
