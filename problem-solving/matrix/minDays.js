/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  function countIslands() {
    const seen = new Set();

    function dfs(r, c) {
      const stack = [[r, c]];
      while (stack.length > 0) {
        const [x, y] = stack.pop();
        for (const [nx, ny] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {
          if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && grid[nx][ny] === 1 && !seen.has(`${nx},${ny}`)) {
            seen.add(`${nx},${ny}`);
            stack.push([nx, ny]);
          }
        }
      }
    }

    let islands = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 1 && !seen.has(`${i},${j}`)) {
          islands++;
          seen.add(`${i},${j}`);
          dfs(i, j);
        }
      }
    }
    return islands;
  }

  if (countIslands() !== 1) {
    return 0;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        if (countIslands() !== 1) {
          return 1;
        }
        grid[i][j] = 1;
      }
    }
  }

  return 2;
};