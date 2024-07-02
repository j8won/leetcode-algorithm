/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let count = 1;
    let string = '';

    for (let i=1; i<chars.length; i++){
        let prevChar = chars[i-1];

        if (prevChar !== chars[i]){
            string += prevChar;
            if (count>1) string += count;
            count = 1;
        } else count++;
    }

    string += chars[chars.length-1]
    if (count>1) string += count;

    for (let i=0; i<string.length; i++) {
        chars[i] = string[i];
    }

    chars.length = string.length;
};