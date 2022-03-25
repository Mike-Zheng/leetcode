/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  var list = [];

  var ns = [];
  for (let i = 1; i <= n; i++) {
    ns.push(i);
  }

  var dfs = (nl, S) => {
    if (S.length == n) {
      list.push(S);
      return;
    }

    nl.forEach((item) => {
      dnl = nl.filter((_) => _ != item);
      dfs(dnl, S + "" + item);
    });
  };

  dfs(ns, "");

  return list[k - 1];
};
