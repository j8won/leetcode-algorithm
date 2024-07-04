/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let temp = 0;

    const isVowels = (str) => {
        return vowels.includes(str);
    }

    for (let i =0; i<k; i++){
        if (isVowels(s[i])) temp++;
    }

    let max = temp;

    for (let i=k; i<s.length; i++) {
        if (isVowels(s[i])) temp++;
        if (isVowels(s[i-k])) temp--;
        max = Math.max(max, temp);
    }

    return max;
};