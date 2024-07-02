/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {}
    let answer = [];

    for (x of nums1) {
        if (map[x]) {
            map[x]++;
        } else {
            map[x] = 1;
        }
    }

    for (x of nums2) {
        if (map[x]) {
            map[x]--;
            answer.push(x);
        }
    }


    return answer;
};