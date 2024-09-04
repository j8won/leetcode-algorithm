/**
 * @param {string} digits
 * @return {string[]}
 */

const keyboard = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

var letterCombinations = function (digits) {
    // digits = digits.split("");
    if (digits.length === 0) return [];

    const result = [];

    const backtrack = (index, path) => {
        if (index === digits.length) {
            result.push(path);
            return;
        }

        const cur = digits[index];
        const letters = keyboard[cur]

        for (const letter of letters){
            backtrack(index+1, path+letter)
        }
    }

    backtrack(0, "");
    return result;
};