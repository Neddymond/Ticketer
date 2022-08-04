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


// function recursive(graph, node, visited, fn) {
//     visited[node] = true;
//     fn(node)

//     for (const n of graph.edges(node)) {
//         if (!visited.has(n)) {
//             recursive(graph, n, visited, fn)
//         }
//     }
// }

// function nonRecursive() {
//     const visited = {
//         has: function(n) {
//             if (Object.keys(this).length > 0 && this.hasOwnProperty(n)) { return true; }
//         }
//     }
// }

// function getMedian(container) {
//     // TODO: implement this method
//     if (container.length < 1) {
//       throw new Error('Container is empty')
//     }
//     const sortedContainer = container.sort((a, b) =>      a - b);
    
//     let half = Math.floor(sortedContainer.length / 2);
  
//   if (sortedContainer.length % 2) {
//    return sortedContainer[half]; 
//   }
  
//   return sortedContainer[half - 1 ]; 
// }

// console.log(getMedian([1, 2, 3, 4]))


const fetch = require('node-fetch');

fetch('https://kobo3660.atlassian.net/rest/api/3/user?accountId=60febc29ae72b2006fe0d96f', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'chinedu@ext.kobo360.com:<7pBaJyAX9LCfw1QYyo1jAF14>'
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));

  // return <div>
  //       <h1>Lammie</h1>
  //       <p style={{color:"red", fontStyle: "italic"}}>Sexiest lips I've seen in a while💋</p>
  //       <br />
  //       <div style={{width: '300px', height:'300px', position: "relative"} }>
  //           <Image 
  //               src='/Lammie.jpeg'
  //               layout="fill" 
  //           />
  //       </div>
        
  //   </div>