/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
    let output = 0;
    let m = s.length;
    let i = 0;
    while (i < m) {
        if (s[i] == 'X') {
            output++;
            i = i + 3;
        } else {
            i++;
        }
    }

    return output;
};
