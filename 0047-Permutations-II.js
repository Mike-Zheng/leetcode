/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    var record = {};
    let output = [];
    const dfs = (current, rest) => {
        let restLength = rest.length;
        if (restLength === 0) {
            let key = current.join('');
            if (!record[key]) {
                output.push(current);
                record[key] = true;
            }
            return;
        }

        for (let i = 0; i < restLength; i++) {
            let newRest = [...rest];
            newRest.splice(i, 1);
            dfs([...current, rest[i]], newRest);
        }
    };

    dfs([], [...nums]);

    return output;
};
