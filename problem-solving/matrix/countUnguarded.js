/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    // Initialize grid with zeros
    const grid = Array.from({ length: m }, () => Array(n).fill(0));

    // Mark guards and walls as 2
    for (const [x, y] of guards) {
        grid[x][y] = 2;
    }
    for (const [x, y] of walls) {
        grid[x][y] = 2;
    }

    // Directions: up, right, down, left
    const directions = [
        [-1, 0], // up
        [0, 1],  // right
        [1, 0],  // down
        [0, -1], // left
    ];

    // Process each guard's line of sight
    for (const [gx, gy] of guards) {
        for (const [dx, dy] of directions) {
            let x = gx, y = gy;
            while (true) {
                x += dx;
                y += dy;
                // Stop if out of bounds or hitting a guard/wall
                if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 2) {
                    break;
                }
                // Mark as guarded if not already a guard or wall
                if (grid[x][y] === 0) {
                    grid[x][y] = 1;
                }
            }
        }
    }

    // Count unguarded cells
    let unguardedCount = 0;
    for (const row of grid) {
        unguardedCount += row.filter(cell => cell === 0).length;
    }

    return unguardedCount;
};