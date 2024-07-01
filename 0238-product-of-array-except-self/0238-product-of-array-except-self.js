/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [];
    let n = nums.length;

    let left = Array.from({length: n}, () => 1);
    let leftPrefix = 1;
    for (let i=0; i < n-1; i++){
        leftPrefix = nums[i] * leftPrefix;
        left[i+1] = leftPrefix;
    }

    let right = Array.from({length:n}, () => 1);
    let rightPrefix = 1;
    for (let i=n-1; i>0; i--){
        rightPrefix = nums[i] * rightPrefix;
        right[i-1] = rightPrefix;
    }

    for (let i=0; i<n; i++){
        answer[i] = left[i] * right[i];
    }

    return answer;
};