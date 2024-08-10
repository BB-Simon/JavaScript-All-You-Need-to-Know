function dfs(adj, i, j) {
  const size = adj.length;
  adj[i][j] = 0;
  const directions = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0]
  ];

  for (const [dx, dy] of directions) {
    const x = i + dx;
    const y = j + dy;

    if (x < 0 || x >= size || y < 0 || y >= size || adj[x][y] === 0) {
      continue;
    }

    dfs(adj, x, y);
  }
}

/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const n = grid.length;
  const adj = Array.from({ length: n * 3 }, () => Array(n * 3).fill(1));

  // console.log({adj})

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const r = i * 3;
      const c = j * 3;
      if (grid[i][j] === "/") {
        adj[r + 2][c] = 0;
        adj[r + 1][c + 1] = 0;
        adj[r][c + 2] = 0;
      } else if (grid[i][j] === "\\") {
        adj[r][c] = 0;
        adj[r + 1][c + 1] = 0;
        adj[r + 2][c + 2] = 0;
      }
    }
  }

  // console.log({ adjafter: adj });

  let count = 0;
  for (let i = 0; i < n * 3; i++) {
    for (let j = 0; j < n * 3; j++) {
      // console.log({s: adj[i][j]})
      if (adj[i][j] === 1) {
        dfs(adj, i, j);
        count++;
      }
    }
  }

  return count;
};

regionsBySlashes([" /", "/ "])