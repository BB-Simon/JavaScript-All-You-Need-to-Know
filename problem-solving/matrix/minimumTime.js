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
var minimumTime = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1], // down, up, right, left
  ];

  // Min-Heap using a priority queue
  const heap = new MinHeap();
  heap.push([grid[0][0], 0, 0]); // [time, row, col]

  const visited = new Set();
  visited.add(`0,0`);

  // Check if the initial move is valid
  if (grid[0][1] > 1 && grid[1][0] > 1) {
    return -1;
  }

  while (!heap.isEmpty()) {
    const [time, r, c] = heap.pop();

    // If we reach the bottom-right corner, return the time
    if (r === rows - 1 && c === cols - 1) {
      return time;
    }

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        !visited.has(`${nr},${nc}`)
      ) {
        visited.add(`${nr},${nc}`);
        if (grid[nr][nc] <= time + 1) {
          heap.push([time + 1, nr, nc]);
        } else {
          const waitTime =
            (grid[nr][nc] - time) % 2 === 0 ? grid[nr][nc] + 1 : grid[nr][nc];
          heap.push([waitTime, nr, nc]);
        }
      }
    }
  }

  return -1;
};
