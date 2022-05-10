/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let elem = s[i];
        stack.push(elem);

        let isSame = true;
        for (let j = 1; j <= k; j++) {
            if (j > stack.length || stack[stack.length - j] !== elem) {
                isSame = false;
                break;
            }
        }

        if (isSame) {
            stack.splice(stack.length - k, k);
        }
    }

    return stack.join('');
};
