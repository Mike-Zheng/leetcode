/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length === 1 || numRows === 1) return s;
  let zq = [];
  for (var i = 0; i < numRows; i++) {
    zq[i] = [];
  }

  let round_length = 2 * numRows - 2;

  s.split("").forEach((_, j) => {
    let index_in_circle = (j + 1) % round_length;
    if (index_in_circle === 0) index_in_circle = round_length;

    if (index_in_circle <= numRows) {
      zq[index_in_circle - 1].push(_);
    }

    if (index_in_circle > numRows) {
      zq[2 * numRows - index_in_circle - 1].push(_);
    }
  });

  return zq.map((_) => _.join("")).join("");
};
