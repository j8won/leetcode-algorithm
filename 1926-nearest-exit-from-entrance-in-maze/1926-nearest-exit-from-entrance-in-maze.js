/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    let col = maze[0].length, row = maze.length;
    let dir = [[0, 1], [-1, 0], [0, -1], [1, 0]];

    let q = [[entrance[0], entrance[1], 0]];
    maze[entrance[0]][entrance[1]] = "+";

    while (q.length > 0) {
        let [x, y, steps] = q.shift();

        for (let [i, j] of dir) {
            let newX = x + i, newY = y + j;

            if (newX >= 0 && newX < row && newY >= 0 && newY < col && maze[newX][newY] === ".") {
                if (newX === 0 || newY === 0 || newX === row - 1 || newY === col - 1) {
                    return steps + 1;
                }
                maze[newX][newY] = "+";
                q.push([newX, newY, steps + 1]);
            }
        }
    }

    return -1;
};