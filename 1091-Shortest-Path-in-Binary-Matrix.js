/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    let size = grid.length - 1;
    let queue = [[0, 0]];
    if (grid[0][0] || grid[size][size]) return -1;

    grid[0][0] = 1;
    while (queue.length) {
        let curr = queue.shift(),
            i = curr[0],
            j = curr[1];
        if (i === size && j === size) return grid[size][size];
        for (let a = Math.max(i - 1, 0); a <= Math.min(i + 1, size); a++)
            for (let b = Math.max(j - 1, 0); b <= Math.min(j + 1, size); b++)
                if (grid[a][b] === 0) (grid[a][b] = grid[i][j] + 1), queue.push([a, b]);
    }
    return -1;
};
