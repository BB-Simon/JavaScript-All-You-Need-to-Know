// Class to represent a graph using adjacency list
class Graph {
  constructor() {
    this.adjList = {};
  }

  // Function to add an edge to the graph
  addEdge(u, v) {
    if (!this.adjList[u]) this.adjList[u] = [];
    this.adjList[u].push(v);
  }

  // Function to perform Breadth First Search 
  // on a graph represented using adjacency list
  bfs(startNode) {
    // Create a queue for BFS
    const queue = [];
    const visited = new Array(Object.keys(this.adjList).length).fill(false);

    // Mark the current node as visited and enqueue it
    visited[startNode] = true;
    queue.push(startNode);

    // Iterate over the queue
    while (queue.length !== 0) {
      // Dequeue a vertex from queue and print it
      const currentNode = queue.shift();
      console.log(currentNode + " ");

      // Get all adjacent vertices of the dequeued vertex currentNode
      // If an adjacent has not been visited, then mark it visited and enqueue it
      for (const neighbor of this.adjList[currentNode] || []) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}

// Create a graph
const graph = new Graph();

// Add edges to the graph
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 4);
console.log({ graph: graph.adjList })

// Perform BFS traversal starting from vertex 0
console.log("Breadth First Traversal starting from vertex 0: ");
graph.bfs(90);