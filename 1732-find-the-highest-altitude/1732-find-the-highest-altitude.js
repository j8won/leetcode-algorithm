/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    gain.unshift(0);

    let answer = [];
    gain.reduce((acc, cur) => {
        let sum = acc+cur;
        answer.push(sum);
        return sum
    }, 0);

    return Math.max(...answer);  
};