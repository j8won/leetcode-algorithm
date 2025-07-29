/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

// O(n)

var mergeAlternately = function(word1, word2) {
    word1 = word1.split("");
    word2 = word2.split("");

    const max = Math.max(word1.length, word2.length);

    let answer = [];
    for (let i =0; i<max; i++){
        answer.push(word1[i]);
        answer.push(word2[i]);
    }

    answer.filter(x => !x);
    return answer.join("");
};