/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function (n) {
  var board = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let dir = ">"; //>  v  <  ^

  let text = 1;
  let qty = n * n;
  let curI = 0;
  let curJ = 0;
  let times = n - 0.5;
  while (text <= qty) {
    switch (dir) {
      case ">":
        var j = curJ;
        for (; j < curJ + Math.ceil(times); j++) {
          board[curI][j] = text;
          text++;
        }
        curJ = j - 1;
        curI++;
        times = times - 0.5;
        dir = "v";

        break;

      case "v":
        var i = curI;
        for (; i < curI + Math.ceil(times); i++) {
          board[i][curJ] = text;
          text++;
        }
        curI = i - 1;
        curJ--;
        times = times - 0.5;
        dir = "<";

        break;

      case "<":
        var dJ = curJ;
        for (; dJ > curJ - Math.ceil(times); dJ--) {
          board[curI][dJ] = text;
          text++;
        }
        curJ = dJ + 1;
        curI--;
        times = times - 0.5;
        dir = "^";

        break;

      case "^":
        var dI = curI;
        for (; dI > curI - Math.ceil(times); dI--) {
          board[dI][curJ] = text;
          text++;
        }
        curI = dI + 1;
        curJ++;
        times = times - 0.5;
        dir = ">";

        break;
    }
  }

  return board;
};
