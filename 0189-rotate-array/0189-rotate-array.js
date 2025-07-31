/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length
    k = k % n;

    if (k === 0) {
        return;
    }

    let temp = nums.slice(-k);

    for (let i = n-k-1; i>=0; i--) {
        nums[i+k] = nums[i];
    }

    for (let i=0; i<k; i++) {
        nums[i]=temp[i]
    }

};