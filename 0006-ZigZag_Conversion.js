/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let stringList = s.split("");
  if (stringList.length <= 1 || numRows <= 1) {
    return s;
  }

  let zq = Array(numRows).fill("");

  let oneRoundLength = 2 * numRows - 2;

  stringList.forEach((char, j) => {
    let indexInCircle = (j + 1) % oneRoundLength;
    if (indexInCircle === 0) indexInCircle = oneRoundLength;

    if (indexInCircle <= numRows) {
      zq[indexInCircle - 1] += char;
    }

    if (indexInCircle > numRows) {
      zq[2 * numRows - indexInCircle - 1] += char;
    }
  });

  return zq.join("");
};