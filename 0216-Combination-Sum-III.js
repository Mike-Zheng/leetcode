/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let output = [];

  let diff = 0;
  for (let i = 1; i < k; i++) {
    diff += i;
  }

  const dfs = (nums, index) => {
    if (index == k) {
      let sum = nums.reduce((acc, item) => acc + item, 0);
      if (sum == n) {
        output.push(nums);
      }
      return;
    }

    let last = nums.length ? nums[nums.length - 1] : 0;
    for (let i = last + 1; i <= Math.min(9, n - diff); i++) {
      dfs([...nums, i], index + 1);
    }
    return;
  };

  dfs([], 0);

  return output;
};
