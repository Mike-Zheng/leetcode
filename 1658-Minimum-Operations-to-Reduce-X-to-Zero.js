/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    let length = nums.length;
    let target = nums.reduce((acc, i) => acc + i, 0) - x;

    var sum = 0;
    var l = 0;
    var ans = -1;
    for (let r = 0; r < length; r++) {
        sum += nums[r];
        while (l <= r && sum > target) {
            l++;
            sum -= nums[l];
        }

        if (target == sum) {
            ans = Math.max(ans, r - l + 1);
        }
    }

    return ans == -1 ? -1 : length - ans;
};
