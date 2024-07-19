/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let result = [];

    function findMinColumn(row) {
        return matrix[row].reduce((minIndex, value, index, arr) => value < arr[minIndex] ? index : minIndex, 0);
    }

    function isMaxInColumn(val, col) {
        return matrix.every(row => row[col] <= val);
    }

    for (let i = 0; i < matrix.length; i++) {
        let minCol = findMinColumn(i);
        let candidate = matrix[i][minCol];

        if (isMaxInColumn(candidate, minCol)) {
            result.push(candidate);
        }
    }

    return result;
};