/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = [0];
    let i = 1;
    let m = coins.length;
    while (i <= amount) {
        let change = 10e9;
        for (let j = 0; j < m; j++) {
            if (i - coins[j] >= 0 && dp[i - coins[j]] != -1) {
                change = Math.min(1 + dp[i - coins[j]], change);
            }
        }
        change = change == 10e9 ? -1 : change;

        dp.push(change);
        i++;
    }

    return dp[amount];
};
