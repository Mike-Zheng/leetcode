/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let m = Math.pow(2, k) - 1;
    let map = {};
    let l = s.length;
    let matcher = 0;

    for (let i = 0; i + k <= l; i++) {
        let binary = s.substr(i, k);
        let value = parseInt(binary, 2);

        if (!map[value]) {
            map[value] = true;
            matcher = matcher + value;
        }
    }

    return (m * (m + 1)) / 2 === matcher && !!map[0];
};
