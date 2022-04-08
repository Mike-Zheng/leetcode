/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.nums = nums;
  this.nums.sort((a, b) => b - a);
  this.nums = nums.slice(0, k);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  let findIndex = this.k;
  for (let i = 0; i <= this.k; i++) {
    if (val >= this.nums[i]) {
      findIndex = i;
      break;
    }
  }

  this.nums = [
    ...this.nums.slice(0, findIndex),
    val,
    ...this.nums.slice(findIndex),
  ];
  if (this.nums.length > this.k) {
    this.nums.pop();
  }

  return this.nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
