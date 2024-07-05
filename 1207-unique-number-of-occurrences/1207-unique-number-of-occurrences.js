/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};

    for (let x of arr) {
        map[x] ? map[x]++ : map[x] = 1;
    }

    let values = Object.values(map);
    let set = new Set(values);

    return values.length === set.size;
};