/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let graph = {};

    for (let i=0; i<isConnected.length; i++) {
        graph[i] = [];
        for (let j=0; j<isConnected.length; j++){
            isConnected[i][j] && graph[i].push(j);
        }
    }

    let visited = {};
    const dfs = (start) => {
        visited[start] = true;
        for (let neighbor of graph[start]){
            if (!visited[neighbor]) dfs(neighbor)
        }
    }

    let answer = 0;
    for (let i=0; i<isConnected.length; i++){
        if (!visited[i]){
            answer++;
            dfs(i);
        }
    }
    return answer
};