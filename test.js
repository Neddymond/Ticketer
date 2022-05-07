// const CountTriplets = (arr, d) => {
//     let ans = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             for (let k = j + 1; k < arr.length; k++) {
//                 if (arr[j] - arr[i] === d && arr[k] - arr[j] === d) ans++;
//             }
//         }
//     }

//     return ans;
// }


function recursive(graph, node, visited, fn) {
    visited[node] = true;
    fn(node)

    for (const n of graph.edges(node)) {
        if (!visited.has(n)) {
            recursive(graph, n, visited, fn)
        }
    }
}

function nonRecursive() {
    const visited = {
        has: function(n) {
            if (Object.keys(this).length > 0 && this.hasOwnProperty(n)) { return true; }
        }
    }
}