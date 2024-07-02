/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;

    for (x of t) {
        if (x === s[i]) {
            i++;
        }
    }

    if (i === s.length) return true;
    return false;
};