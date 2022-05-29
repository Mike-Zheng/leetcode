/**
 * @param {string[]} words
 * @return {number}
 */

const hasRepeat = (x, y) => {
    let stringX = '';
    let stringY = '';
    for (item of x) {
        if (stringX.indexOf(item) == -1) {
            stringX += item;
        }
    }
    for (item of y) {
        if (stringY.indexOf(item) == -1) {
            stringY += item;
        }
    }
    let stringMix = '';
    let merge = stringX + stringY;
    for (item of merge) {
        if (stringMix.indexOf(item) == -1) {
            stringMix += item;
        }
    }

    return stringMix.length !== stringX.length + stringY.length;
};

var maxProduct = function (words) {
    let m = words.length;
    ouput = 0;
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < m; j++) {
            if (!hasRepeat(words[i], words[j])) {
                c = words[i].length * words[j].length;
                ouput = Math.max(c, ouput);
            }
        }
    }

    return ouput;
};

