/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    const map = {};
    const reverseMap = {}
    for ([from, to] of connections) {
        if (!map[from]) map[from] = []; 
        map[from].push(to); 

        if (!reverseMap[to]) reverseMap[to] = [];
        reverseMap[to].push(from);
    }

    let reorder = 0;
    const visited = new Set();

    const dfs = (node, reordering=false) => {
        if (visited.has(node)) return;
        visited.add(node);

        if (reordering) reorder++;

        // console.log(node, reorder, visit, reverseMap[node], map[node])

        reverseMap[node] && reverseMap[node].forEach(next => dfs(next, false));
        map[node] && map[node].forEach(next => {
            if (visited.has(next)) return;
            dfs(next, true)
        })
    }
    dfs(0)

    return reorder;
};