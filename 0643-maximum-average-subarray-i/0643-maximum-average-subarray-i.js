/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i = 0;
    let temp = 0;
    for (let i=0; i<k; i++) {
        temp+=nums[i];
    }

    let maxSum = temp;

    for (let i=k; i<nums.length; i++) {
        temp += nums[i];
        temp -= nums[i-k];
        maxSum = Math.max(maxSum, temp);
    }

    return (maxSum/k).toFixed(5);
};