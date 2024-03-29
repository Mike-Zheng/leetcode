/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    if (obstacleGrid[m - 1][n - 1] == 1 || obstacleGrid[0][0] == 1) return 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) {
                obstacleGrid[i][j] = -1;
            } else if (obstacleGrid[i][j] != 0) {
                continue;
            } else {
                let sum = 0;

                if (i - 1 >= 0 && obstacleGrid[i - 1][j] != 1) sum = sum + obstacleGrid[i - 1][j];
                if (j - 1 >= 0 && obstacleGrid[i][j - 1] != 1) sum = sum + obstacleGrid[i][j - 1];

                obstacleGrid[i][j] = sum;
            }
        }
    }

    return -obstacleGrid[m - 1][n - 1];
};
