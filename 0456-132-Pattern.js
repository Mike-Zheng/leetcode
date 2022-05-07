/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    let length = nums.length;
    if (length < 3) return false;
    let secondLargeNum = -10e9;
    let stack = [];

    for (let i = length - 1; i >= 0; i--) {
        var item = nums[i];
        if (secondLargeNum > item) {
            return true;
        }

        while (stack.length > 0 && item > stack[stack.length - 1]) {
            secondLargeNum = stack.pop();
        }
        stack.push(item);
    }

    return false;
};

