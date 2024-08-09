/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  function checkEqualRowSums(matrix) {
    // Calculate the sum of the first row
    const rowSum = matrix[0].reduce((a, b) => a + b, 0);
    // Check if all other rows have the same sum
    for (const row of matrix) {
      if (row.reduce((a, b) => a + b, 0) !== rowSum) {
        return false;
      }
    }
    return true;
  }

  function checkEqualColSums(matrix) {
    // Transpose the matrix to check column sums using row sum checker
    const transposed = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    return checkEqualRowSums(transposed);
  }

  function checkDiagonals(matrix) {
    const n = matrix.length;
    // Sum of the main diagonal (top-left to bottom-right)
    const d1 = matrix.reduce((sum, row, i) => sum + row[i], 0);
    // Sum of the anti-diagonal (top-right to bottom-left)
    const d2 = matrix.reduce((sum, row, i) => sum + row[n - i - 1], 0);
    // Both diagonals must have the same sum and match the row sum
    return d1 === d2 && d1 === matrix[0].reduce((a, b) => a + b, 0);
  }

  function isMagicSquare(matrix) {
    // Flatten the matrix and sort to check for all numbers 1-9
    const flattened = matrix.flat();
    if (flattened.sort((a, b) => a - b).join('') !== '123456789') {
      return false;
    }
    // Check row sums, column sums, and diagonal sums
    return checkEqualRowSums(matrix) && checkEqualColSums(matrix) && checkDiagonals(matrix);
  }

  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // Loop through each possible 3x3 subgrid
  for (let i = 0; i <= rows - 3; i++) {
    for (let j = 0; j <= cols - 3; j++) {
      const subgrid = grid.slice(i, i + 3).map(row => row.slice(j, j + 3));

      console.log({ subgrid })
      if (isMagicSquare(subgrid)) {
        count += 1;
      }
    }
  }

  return count;

};

numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]])