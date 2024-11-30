/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function (pairs) {
  const graph = new Map(); // Adjacency list
  const inOutDeg = new Map(); // Tracks in/out degree differences

  // Build graph and count in/out degrees
  for (const [start, end] of pairs) {
    if (!graph.has(start)) graph.set(start, []);
    graph.get(start).push(end);

    inOutDeg.set(start, (inOutDeg.get(start) || 0) + 1); // Out-degree
    inOutDeg.set(end, (inOutDeg.get(end) || 0) - 1); // In-degree
  }

  // Find starting node
  let startNode = pairs[0][0];
  for (const [node, degree] of inOutDeg.entries()) {
    if (degree === 1) {
      startNode = node;
      break;
    }
  }

  const path = [];
  function dfs(curr) {
    const stack = [];
    stack.push(curr);

    while (stack.length > 0) {
      const node = stack[stack.length - 1];

      if (graph.has(node) && graph.get(node).length > 0) {
        stack.push(graph.get(node).pop());
      } else {
        stack.pop();
        if (stack.length > 0) {
          path.push([stack[stack.length - 1], node]);
        }
      }
    }
  }

  dfs(startNode);
  return path.reverse();
};
