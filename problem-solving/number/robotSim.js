/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let x = 0, y = 0, d = 0;
  const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let maxDistance = 0;
  const obstacleSet = new Set(obstacles.map(obstacle => obstacle.toString()));

  for (let cmd of commands) {
    if (cmd === -1) {
      d = (d + 1) % 4;
    } else if (cmd === -2) {
      d = (d + 3) % 4; // equivalent to (d - 1 + 4) % 4
    } else {
      for (let i = 0; i < cmd; i++) {
        const nx = x + direction[d][0];
        const ny = y + direction[d][1];
        if (obstacleSet.has([nx, ny].toString())) {
          break;
        }
        x = nx;
        y = ny;
        maxDistance = Math.max(maxDistance, x * x + y * y);
      }
    }
  }

  return maxDistance;
};