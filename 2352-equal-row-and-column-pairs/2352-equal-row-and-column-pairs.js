/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let columns = {};
    let rows = {};

    for (let x of grid) {
        x = x.join(",");
        columns[x] = (columns[x] || 0) + 1;
    }

    for (let i = 0; i < grid.length; i++) {
        let x = [];
        grid.forEach((a) => x.push(a[i]));
        console.log(x)
        x.join(",");
        rows[x] = (rows[x] || 0) + 1;
    }

    let answer = 0;
    for (let x of Object.keys(columns)){
        if (rows[x]) {
            answer += columns[x] * rows[x];
        }
    }

    return answer;
};