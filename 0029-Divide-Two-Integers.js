/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let quotient = dividend / divisor;
    let flag = quotient >= 0 ? 1 : -1;
    let output = Math.floor(Math.abs(quotient)) * flag;
    let max = Math.pow(2, 31) - 1;
    let min = -Math.pow(2, 31);

    return Math.max(Math.min(max, output), min);
};
