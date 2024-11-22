/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let res = 0;

    const map = new Map();

    for (let i = 0; i < n; i++) {
        if (matrix[i][m - 1] === 1) {
            for (let j = 0; j < m; j++) {
                matrix[i][j] ^= matrix[i][m - 1];
            }
        }
        const rowHash = JSON.stringify(matrix[i]); // Using JSON.stringify for hash-like behavior
        map.set(rowHash, (map.get(rowHash) || 0) + 1);
        res = Math.max(res, map.get(rowHash));
    }

    return res;
};