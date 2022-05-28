/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sumValue = nums.reduce((acc, item) => acc + item, 0);
    let m = nums.length;
    return (m * (m + 1)) / 2 - sumValue;
};
