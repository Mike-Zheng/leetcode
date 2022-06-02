/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
};
