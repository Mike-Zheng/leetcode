/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const p = ps(pattern);
  return words.filter((_) => ps(_) === p);
};

const ps = (word) => {
  let map = {};
  let id = 1;
  return [...word].reduce((acc, char) => {
    if (!map[char]) {
      map[char] = id;
      id++;
    }
    acc = acc + "/" + map[char];
    return acc;
  }, "");
};
