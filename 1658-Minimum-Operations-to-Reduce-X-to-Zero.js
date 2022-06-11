/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    let length = nums.length;

    let sum = nums.reduce((acc, i) => acc + i, 0);
    let output = -1;

    let preSumHash = {};

    const sumRange = (x, y) => {
        if (preSumHash[[x, y]]) {
            return preSumHash[[x, y]];
        }

        if (preSumHash[[x, y + 1]]) {
            preSumHash[[x, y]] = preSumHash[[x, y + 1]] - nums[y + 1];
            return preSumHash[[x, y]];
        }

        if (preSumHash[[x - 1, y]]) {
            preSumHash[[x, y]] = preSumHash[[x - 1, y]] - nums[x - 1];
            return preSumHash[[x, y]];
        }

        let s = 0;
        for (let i = x; i <= y; i++) {
            s += nums[i];
        }
        preSumHash[[x, y]] = s;
        return s;
    };

    if (sum == x) {
        output = length;
    }

    for (let i = 0; i < length; i++) {
        for (let j = length - 1; j >= i; j--) {
            let scopeSum = sumRange(i, j);

            if (scopeSum == sum - x) {
                let ans = length - j + i - 1;
                output = output > -1 ? Math.min(output, ans) : ans;
                break;
            }

            if (scopeSum < sum - x) {
                break;
            }
        }
    }

    return output;
};
