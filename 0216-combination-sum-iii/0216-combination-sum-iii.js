/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const answer = [];


    function helper(path, start, target){
        if (path.length === k) {
            if (target === 0) {
                answer.push(path);
            }
            return;
        }

        if (target < 0) {
            return
        }

        for (let i=start; i<=9; i++) {
            const newPath = [...path, i]
            helper(newPath, i+1, target-i);
        }
    }

    helper([], 1, n)

    return answer
};