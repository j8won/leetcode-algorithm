/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // 문자열이 반복되지 않는 경우
    if (str1+str2 !== str2+str1) return ""

    // 문자열이 반복되는 경우는 최대공약수로 구할 수 있음
    // ABAB, ABABAB => AB 반복
    // ABAB, ABABABAB => ABAB 반복

    function gcd(a, b){
        if (b===0) return a;
        return gcd(b, a%b)
    }

    return str1.slice(0, gcd(str1.length, str2.length));
};