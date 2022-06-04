/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let length = nums.length;
    let ans = [];

    const iterator = (left, combination) => {
        if (left.length == 0) {
            ans.push(combination);
            return;
        }

        for (let i = 0; i < left.length; i++) {
            let item = left[i];
            let scopeCombination = combination.slice();
            scopeCombination.push(item);
            let scopeLeft = left.filter((_) => _ != item);
            iterator(scopeLeft, scopeCombination);
        }
    };

    iterator(nums, []);

    return ans;
};
