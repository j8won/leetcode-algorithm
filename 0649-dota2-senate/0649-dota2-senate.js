/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let radiantQ = [];
    let direQ = [];

    for (let i=0; i<senate.length; i++){
        senate[i] === "R" ? radiantQ.push(i) : direQ.push(i);
    }

    while (radiantQ.length > 0 && direQ.length > 0) {
        const r = radiantQ.shift();
        const d = direQ.shift();

        if (r < d) {
            radiantQ.push(r + senate.length);
        } else {
            direQ.push(d + senate.length);
        }
    }

    return radiantQ.length > 0 ? "Radiant" : "Dire"
};