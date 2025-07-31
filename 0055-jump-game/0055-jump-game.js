/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let start = 0;
    let target = nums[0];

    while (start < nums.length) {
        if (nums[target] === 0) {
            while (start < target) {
                if (nums[target] !== 0) {
                    start = nums[target]
                    break
                }
                target--;
            }

            return false
        } else {
            start += nums[target]
        }

        target = nums[start]
    }

    return true
};