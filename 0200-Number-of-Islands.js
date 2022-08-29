/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let qty = 0;

  const dfs = (i, j, label) => {
    if (grid[i][j] != "1") return;

    grid[i][j] = label + "x";

    if (i > 0) {
      dfs(i - 1, j, label);
    }

    if (i < m - 1) {
      dfs(i + 1, j, label);
    }

    if (j > 0) {
      dfs(i, j - 1, label);
    }

    if (j < n - 1) {
      dfs(i, j + 1, label);
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "1") qty++;
      dfs(i, j, qty);
    }
  }

  return qty;
};
