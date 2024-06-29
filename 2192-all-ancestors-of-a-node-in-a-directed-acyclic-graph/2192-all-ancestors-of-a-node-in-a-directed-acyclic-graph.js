/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    let graph = Array.from({length:n}, () => new Set())

    for (edge of edges){
        let [f, t] = edge;
        graph[f].add(t);
    }

    function dfs(graph, parent, cur, result, visit) {
        visit[cur] = true;
        for (let node of graph[cur]) {
            if (!visit[node]) {
                result[node].add(parent);
                dfs(graph, parent, node, result, visit)
            }
        }
    }

    let result = Array.from({length:n}, () => new Set());
    for (let i=0; i<n; i++){
        dfs(graph, i, i, result, Array.from({length:n}, () => false))
    }

    return result.map(x => [...x])
   
};


var getAncestors2 = function(n, edges) {
    let reversedG = Array.from({length:n}, () => new Set())

    for (edge of edges){
        let [f, t] = edge;
        reversedG[t].add(f);
    }

    for (let parents of reversedG){
        for (let node of parents){
            for (let n of reversedG[node]){
                parents.add(n)
            }
        }
    }

    return reversedG.map(parents => [...parents].sort((a,b)=> a-b))
};
