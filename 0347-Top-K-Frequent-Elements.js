/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var keymap = nums.reduce((acc, item) => {
        if (acc[item]) acc[item]++;
        else acc[item] = 1;
        return acc;
    }, {});

    var list = Object.keys(keymap).map((_) => ({
        key: _,
        value: keymap[_],
    }));

    list.sort((a, b) => b['value'] - a['value']);

    var ans = list.slice(0, k).map((_) => _['key']);

    return ans;
};
