/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'A', 'i', 'I', 'o', 'O', 'u', 'U', 'e', 'E'];

    let arr = s.split('');

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (!vowels.includes(arr[start])) {
            start++;
            continue;
        }
        
        if (!vowels.includes(arr[end])){
            end--;
            continue;
        }

        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }

    return arr.join("")
};