/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let start = 0;
    let answer = 0;

    let cnt = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 0) cnt++;
        if (cnt > 1) {
            nums[start] === 0 && cnt--;
            start++;
        }
        if (cnt<=1) answer = Math.max(answer, end-start);
    }

    return answer;
}