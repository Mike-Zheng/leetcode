/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function (nums) {
  var map = nums.reduce((acc, item) => {
    if (acc[item]) {
      acc[item]++;
    } else acc[item] = 1;

    return acc;
  }, {});
  return Object.keys(map).filter((_) => map[_] >= 2)[0];
};