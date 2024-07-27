/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const dist = Array.from({ length: n }, () => Array(n).fill(10001));

  // Initialize distance matrix
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  // Build initial graph
  for (let [u, v, w] of edges) {
    dist[u][v] = w;
    dist[v][u] = w;
  }

  // Floyd-Warshall algorithm
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  let minReachableCities = n;
  let result = -1;

  // Find the city with the smallest number of reachable cities
  for (let i = 0; i < n; i++) {
    let reachableCities = 0;
    for (let j = 0; j < n; j++) {
      if (dist[i][j] <= distanceThreshold) {
        reachableCities++;
      }
    }
    if (reachableCities <= minReachableCities) {
      minReachableCities = reachableCities;
      result = i;
    }
  }

  return result;
};