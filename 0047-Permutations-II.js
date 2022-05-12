/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let length = nums.length;
    let orderList = nums.map((_, idx) => idx);
    let allset = [];
    let output = [];
    const dfs = (current, idx) => {
        if (idx === length) {
            allset.push(current);
        }

        orderList.forEach((item) => {
            if (current.indexOf(item) == -1) {
                dfs([...current, item], idx + 1);
            }
        });
    };

    dfs([], 0);

    var recordMap = {};
    allset.forEach((set) => {
        let record = set.map((_) => nums[_]);
        let key = record.reduce((acc, item) => acc + item, '');
        if (!recordMap[key]) {
            output.push(record);
            recordMap[key] = true;
        }
    });

    return output;
};
