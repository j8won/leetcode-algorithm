/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length <= 2) {
       return Math.max(nums[0], nums[1]); 
    }

    const dp = [nums[0], nums[1], nums[0] + nums[2]];
    for (let i=3; i<nums.length; i++){
        let sum = Math.max(dp[i-2], dp[i-3]) + nums[i];
        dp.push(sum);
    }

    return Math.max(dp.at(-2), dp.at(-1));
};