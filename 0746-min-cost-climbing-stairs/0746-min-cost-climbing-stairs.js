/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let length = cost.length;
    for (let i = 2; i < length; i++) {
        cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i];
    }

    return Math.min(cost.at(-1), cost.at(-2));
};