/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;

    let i=Infinity, j=Infinity;

    for (let num of nums){
        if (num > j) return true;

        if (num > i) {
            j = num
        } else {
            i = num
        }
    }
    return false;
};