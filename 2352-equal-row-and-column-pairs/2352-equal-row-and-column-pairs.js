/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let columns = {};

    for (let x of grid) {
        x = x.join(",");
        columns[x] = (columns[x] || 0) + 1;
    }

    let answer = 0;
    for (let i = 0; i < grid.length; i++) {
        let x = [];
        grid.forEach((a) => x.push(a[i]));
        x.join(",");
        if (columns[x]) answer += columns[x];
    }
    
    return answer;
};