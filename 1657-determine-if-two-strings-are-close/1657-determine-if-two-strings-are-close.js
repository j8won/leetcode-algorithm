/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    if (word1 === word2) return true;

    let freq1 = Array(26).fill(0);
    let freq2 = Array(26).fill(0);

    for (const letter of word1) {
        freq1[letter.charCodeAt() - 'a'.charCodeAt()]++;
    }

    for (const letter of word2) {
        freq2[letter.charCodeAt() - 'a'.charCodeAt()]++;
    }

    for (let i = 0; i < freq1.length; i++) {
        if ((!freq1[i] && freq2[i] > 0) || (freq2[i] > 0 && !freq2[i])) return false;
    }

    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    for (let i = 0; i < freq1.length; i++) {
        if (freq1[i] !== freq2[i]) return false;
    }

    return true;
};