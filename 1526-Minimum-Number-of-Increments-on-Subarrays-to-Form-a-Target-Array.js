/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
  var n = 0;

  var bs = (ar) => {
    let i = 0;
    let end = 0;
    while (i < ar.length) {
      if (ar[i] == 0) {
        i++;
      } else {
        if (ar[end] == 0 || end == ar.length) {
          var sli = ar.slice(i, end).map((_) => _ - 1);
          if (sli.length > 0) {
            n++;
            console.log(sli);
            bs(sli);
          }
          i = end + 1;
        }
        end++;
      }
    }
  };

  bs(target);

  return n;
};

var minNumberOperations = function (target) {
  return target.reduce((acc, item, index, list) => {
    if (acc == 0) return item;
    if (item > list[index - 1]) {
      return acc + (item - list[index - 1]);
    }
    return acc;
  }, 0);
};
