/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);

    const findIndex = spell => {
        let left = 0;
        let right = potions.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            let strength = potions[mid] * spell;

            if (strength < success) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    const findMatchPotions = (spell) => {
        let idx = findIndex(spell);
        return potions.length - idx;
    }

    let answer = [];
    for (const spell of spells) {
        let match = findMatchPotions(spell);
        answer.push(match);
    }

    return answer;
};