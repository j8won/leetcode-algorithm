/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {

    const stack = [];

    for (let char of s) {
        if (char !== ")") {
            stack.push(char);
            continue;
        }

        const q = [];
        while (stack.at(-1) !== "(") {
            q.push(stack.pop());
        }
        stack.pop(); // remove "("

        q.forEach(c => stack.push(c));

    }

    return stack.join("");
}