/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map1 = {}
    let map2 = {}

    for (x of nums1) {
        if (map1[x]) {
            map1[x]++;
        } else {
            map1[x] = 1;
        }
    }

    for (x of nums2) {
        if (map2[x]) {
            map2[x]++
        } else {
            map2[x] = 1;
        }
    }

    let [smallMap, bigMap] = [];

    if (Object.keys(map1).length > Object.keys(map2).length) {
        [smallMap, bigMap] = [map2, map1];
    } else {
        [smallMap, bigMap] = [map1, map2];
    }

    console.log(smallMap, bigMap);
    let answer = [];

    for (let key of Object.keys(smallMap)) {
        if (bigMap[key] >= 1) {
            let cnt = Math.min(smallMap[key], bigMap[key]);
            Array.from({length: cnt}).forEach(() => answer.push(key))
        }
    }

    return answer;
};