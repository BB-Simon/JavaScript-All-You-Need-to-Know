function bfs(start, end, n, graph) {
  const dist = new Array(n).fill(Infinity);
  dist[start] = 0;
  const queue = [start];

  while (queue.length > 0) {
    const curr = queue.shift(); // Dequeue the current node
    for (const neighbor of graph[curr]) {
      if (dist[neighbor] > dist[curr] + 1) {
        dist[neighbor] = dist[curr] + 1;
        queue.push(neighbor); // Enqueue the neighbor
      }
    }
  }

  return dist[end];
}

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  const answer = [];
  const graph = Array.from({ length: n }, () => []); // Create an adjacency list

  // Initialize the initial graph where each node points to the next
  for (let i = 0; i < n - 1; i++) {
    graph[i].push(i + 1);
  }

  for (const [u, v] of queries) {
    graph[u].push(v); // Add edge for the current query
    answer.push(bfs(0, n - 1, n, graph)); // Calculate the shortest distance
  }

  return answer;
};
