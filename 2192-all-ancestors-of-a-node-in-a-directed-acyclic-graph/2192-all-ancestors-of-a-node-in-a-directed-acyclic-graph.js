/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    // let graph = Array.from({length:n}, () => []);
    let reversedG = Array.from({length:n}, () => new Set())

    for (edge of edges){
        let [f, t] = edge;
        // graph[f].push(t);
        reversedG[t].add(f);
    }

    // console.log(graph);
    // console.log(reversedG);

    for (let parents of reversedG){
        for (let node of parents){
            for (let n of reversedG[node]){
                parents.add(n)
            }
        }
    }

    return reversedG.map(parents => [...parents].sort((a,b)=> a-b))
};