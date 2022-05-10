/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    return [...nums.filter((_) => _ % 2 == 0), ...nums.filter((_) => _ % 2 == 1)];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    return nums.reduce((acc, item) => {
        if (item % 2 == 0) acc.unshift(item);
        else acc.push(item);
        return acc;
    }, []);
};
