/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const isPalindromic = (i, j) => {
        if (i == j) {
            return true;
        }
        while (i < j) {
            if (s[i] == s[j]) {
                i++;
                j--;
            } else {
                return false;
            }
        }

        return true;
    };

    let m = s.length;
    let output = 0;
    for (let x = 0; x < m; x++) {
        for (let y = x; y < m; y++) {
            if (isPalindromic(x, y)) {
                output++;
            }
        }
    }
    return output;
};
