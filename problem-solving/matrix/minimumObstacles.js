// Min-Heap Implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._sinkDown(0);
    return top;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[index][0] >= this.heap[parent][0]) break;
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = parent;
    }
  }

  _sinkDown(index) {
    const length = this.heap.length;
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left][0] < this.heap[smallest][0])
        smallest = left;
      if (right < length && this.heap[right][0] < this.heap[smallest][0])
        smallest = right;
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0], // right, down, left, up
  ];

  // Min-Heap (Priority Queue) with custom comparator
  const heap = new MinHeap();
  heap.push([0, 0, 0]); // [cost, row, col]

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  while (!heap.isEmpty()) {
    const [cost, x, y] = heap.pop();

    // If we reach the bottom-right corner
    if (x === rows - 1 && y === cols - 1) {
      return cost;
    }

    if (visited[x][y]) continue;
    visited[x][y] = true;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // Check bounds and visited state
      if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && !visited[nx][ny]) {
        const newCost = cost + (grid[nx][ny] === 1 ? 1 : 0);
        heap.push([newCost, nx, ny]);
      }
    }
  }

  // If no path exists (problem constraints guarantee a path)
  return -1;
};
