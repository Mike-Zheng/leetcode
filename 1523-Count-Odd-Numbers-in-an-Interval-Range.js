/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  // 3456789 頭尾都是odd
  if (low % 2 == 1 && high % 2 == 1) {
    return (high - low) / 2 + 1;
  }
  // 456789  5678 頭尾其中一個是odd
  if (low % 2 == 1 || high % 2 == 1) {
    return (high - 1 - low) / 2 + 1;
  }
  // 頭尾都不是
  return (high - low - 2) / 2 + 1;
};
