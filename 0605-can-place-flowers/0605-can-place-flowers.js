/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    while (n > 0) {
        if (i >= flowerbed.length) {
            break;
        }

        const leftEmpty = i === 0 || flowerbed[i-1] === 0
        const rightEmpty = i === flowerbed.length-1 || flowerbed[i+1] === 0

        if (leftEmpty && rightEmpty && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n -= 1;
        }

        i++
    }

    if (n === 0) {
        return true
    }

    return false
};