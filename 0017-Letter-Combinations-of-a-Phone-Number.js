/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let digitsInputs = digits.split('');
    let length = digitsInputs.length;
    if (length == 0) return [];
    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    let qty = digitsInputs.reduce((acc, item) => acc * map[item].length, 1);

    var ans = Array(qty).fill('');

    let times = 1;
    while (length--) {
        let k = 0;
        while (k < qty)
            map[digitsInputs[length]].forEach((item) => {
                for (let j = 0; j < times; j++) {
                    ans[k] = item + ans[k];
                    k++;
                }
            });
        times = times * map[digitsInputs[length]].length;
    }

    return ans;
};
