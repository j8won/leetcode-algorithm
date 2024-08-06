/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const findRotten = () => {
        let arr = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 2) arr.push([i, j]);
            }
        }
        return arr;
    }

    let q = findRotten();

    let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let minutes = Array.from({ length: grid.length }, () => Array.from({ length: grid[0].length }, () => null));

    for (let [x, y] of q) {
        minutes[x][y] = 0;
    }

    let answer = 0;
    while (q.length > 0) {
        let [x, y] = q.shift();
        let curMin = minutes[x][y];

        for (let dir of dirs) {
            let newX = x + dir[0], newY = y + dir[1];

            if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
                if (grid[newX][newY] === 1) {
                    grid[newX][newY] = 2;
                    minutes[newX][newY] = curMin + 1;
                    answer = curMin + 1;
                    q.push([newX, newY]);
                }
            }
        }
    }

    for (x of grid) {
        if (x.includes(1)) return -1;
    }

    return answer;
};