/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 1) {
        return 1
    }

    let k=1;

    let left=0;
    let right=1;

    let count=1;

    while (right < nums.length) {
        if (nums[left] === nums[right]) {
            count++;
        } else {
            count=1
        }

        if (count<=2) {
            nums[k]=nums[right]
            k++
        }

        left++;
        right++;
    }

    return k
};