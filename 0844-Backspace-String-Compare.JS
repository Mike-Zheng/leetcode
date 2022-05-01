/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function (s, t) {
    let stackS = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '#') stackS.pop();
        else stackS.push(s[i]);
    }

    let stackT = [];
    for (let i = 0; i < t.length; i++) {
        if (t[i] == '#') stackT.pop();
        else stackT.push(t[i]);
    }

    if (stackT.join('') === stackS.join('')) return true;

    return false;
};
