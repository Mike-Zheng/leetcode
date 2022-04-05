/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = height.length;
    let i = 0;
    let j = l - 1;
    let max = 0;
    while (i < j) {
        let q = Math.min(height[i], height[j]) * (j - i);
        if (q > max) max = q;
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }
    return max;
};
