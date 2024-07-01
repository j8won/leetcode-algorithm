/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const n = candies.length; // kid num
    const maxCandies = Math.max(...candies);

    let answer = [];

    candies.forEach(x => {
        if (x + extraCandies >= maxCandies) answer.push(true);
        else answer.push(false)
    })

    return answer
};