/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const majorNum = Math.ceil(nums.length / 2)

    let map = {}

    for (const num of nums) {
        if (!map[num]) {
            map[num] = 1
        } else {
            map[num]++
        }

        if (map[num] >= majorNum) {
            return num
        } 
    }
};