/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let i=0; i<asteroids.length; i++) {
        const x = asteroids[i]
        const last = stack.at(-1);

        if (!stack.length || last < 0 || x > 0) stack.push(x);
        else if (x + last === 0) {
            stack.pop();
        } else if (Math.abs(last) < Math.abs(x)) {
            stack.pop();
            i--;
        }
    }

    return stack;
};