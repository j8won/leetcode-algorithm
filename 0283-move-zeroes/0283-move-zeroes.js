/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let zeroes = 0;

    for (let i=0; i<nums.length; i++){
        if (nums[i] === 0){
            nums.splice(i, 1);
            zeroes++;
            i--;
        }
    }

    for (let i=0; i<zeroes; i++) nums.push(0)
};