/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    return nums.reduce(
        (obj, item) => {
            obj.sum += item;
            obj.output.push(obj.sum);
            return obj;
        },
        { sum: 0, output: [] }
    ).output;
};
