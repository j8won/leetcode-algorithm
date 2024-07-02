/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;

    let max = 0;

    while (left < right) {
        let cur = Math.min(height[left], height[right]) * (right - left);

        max = Math.max(max, cur);

        if (height[left] > height[right]) right--;
        else left++;
    }

    return max;
};