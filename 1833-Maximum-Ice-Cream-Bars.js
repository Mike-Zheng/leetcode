/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let sum = 0;
  let qty = 0;
  for (let i = 0; i < costs.length; i++) {
    sum += costs[i];
    qty++;

    if (sum > coins) {
      qty -= 1;
      break;
    }
    if (sum == coins) {
      break;
    }
  }

  return qty;
};
