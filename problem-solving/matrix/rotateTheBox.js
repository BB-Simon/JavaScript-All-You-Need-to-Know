/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  const m = box.length;
  const n = box[0].length;

  // Process each row in the box
  for (const row of box) {
    let j = n - 1; // The position where the next stone can fall

    // Iterate from the end of the row to the beginning
    for (let i = n - 1; i >= 0; i--) {
      if (row[i] === "#") {
        if (i < j) {
          row[i] = ".";
          row[j] = "#";
        }
        j--; // Move the fall position backward
      } else if (row[i] === "*") {
        j = i - 1; // Reset the fall position to just before the obstacle
      }
    }
  }

  // Rotate the box clockwise 90 degrees using matrix transposition and reversal
  const rotatedBox = [];
  for (let col = 0; col < n; col++) {
    const newRow = [];
    for (let row = m - 1; row >= 0; row--) {
      newRow.push(box[row][col]);
    }
    rotatedBox.push(newRow);
  }

  return rotatedBox;
};
