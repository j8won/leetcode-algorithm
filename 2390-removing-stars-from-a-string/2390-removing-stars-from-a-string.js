/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];

    for (let x of s) {
        if (x === "*") stack.pop();
        else stack.push(x)
    }

    return stack.join("")
};