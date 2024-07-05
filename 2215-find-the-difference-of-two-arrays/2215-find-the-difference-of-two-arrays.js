/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    let answer = [[], []];

    for (x of set1) {
        if (!set2.has(x)) answer[0].push(x);
    }

    for (x of set2) {
        if (!set1.has(x)) answer[1].push(x);
    }

    return answer;
};