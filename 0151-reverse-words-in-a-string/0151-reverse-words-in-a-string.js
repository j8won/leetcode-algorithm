/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s.trim();
    let arr = s.split(" ");
    arr = arr.filter(x => x !== '').reverse();

    return arr.join(' ')
};