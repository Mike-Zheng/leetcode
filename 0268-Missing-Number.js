/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function (nums) {

    nums.sort((a, b) => a - b);
    let m = nums.length;
    for (let i = 0; i < m; i++) {
        if (nums[i] !== i) return i;
    }
    return m;
};

