/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
  // Initialize the adjacency list
  let g = Array.from({ length: n + 1 }, () => []);

  // Populate the adjacency list with edges
  for (let [u, v] of edges) {
    g[u].push(v);
    g[v].push(u);
  }

  // Initialize the queue and distance arrays
  let q = [[1, 1]];
  let dist1 = new Array(n + 1).fill(-1);
  let dist2 = new Array(n + 1).fill(-1);

  dist1[1] = 0;

  while (q.length > 0) {
    let [x, freq] = q.shift();

    let t = (freq === 1) ? dist1[x] : dist2[x];

    if (Math.floor(t / change) % 2 === 1) {
      t = change * (Math.floor(t / change) + 1) + time;
    } else {
      t += time;
    }

    for (let y of g[x]) {
      if (dist1[y] === -1) {
        dist1[y] = t;
        q.push([y, 1]);
      } else if (dist2[y] === -1 && dist1[y] !== t) {
        if (y === n) {
          return t;
        }
        dist2[y] = t;
        q.push([y, 2]);
      }
    }
  }

  return 0;
};