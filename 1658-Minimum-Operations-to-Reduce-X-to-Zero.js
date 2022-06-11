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

    preSumHash[[0, 0]] = nums[0];
    for (let j = 1; j < length; j++) {
        preSumHash[[0, j]] = preSumHash[[0, j - 1]] + nums[j];
    }

    for (let i = 1; i < length; i++) {
        for (let j = i; j < length; j++) {
            preSumHash[[i, j]] = preSumHash[[i - 1, j]] - preSumHash[[i - 1, i - 1]];
        }
    }

    if (sum == x) {
        output = length;
    }

    for (let i = 0; i < length; i++) {
        for (let j = length - 1; j >= i; j--) {
            let scopeSum = preSumHash[[i, j]];

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
