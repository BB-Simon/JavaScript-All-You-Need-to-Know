/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const move = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4],
  };
  const target = "123450";
  let prevQueue = new Set();
  let queue = new Set([board.flat().join("")]);
  let step = 0;

  while (queue.size > 0) {
    const newQueue = new Set();
    for (const currBoard of queue) {
      if (currBoard === target) {
        return step;
      }
      const newBoard = currBoard.split("");
      const i = newBoard.indexOf("0");
      for (const ii of move[i]) {
        [newBoard[i], newBoard[ii]] = [newBoard[ii], newBoard[i]]; // Swap
        const newBoardStr = newBoard.join("");
        if (!prevQueue.has(newBoardStr)) {
          newQueue.add(newBoardStr);
        }
        [newBoard[i], newBoard[ii]] = [newBoard[ii], newBoard[i]]; // Undo swap
      }
    }
    step++;
    prevQueue = new Set([...prevQueue, ...queue]);
    queue = newQueue;
  }
  return -1;
};

// var slidingPuzzle = function(board) {
//     // Target state and initial state
//     const target = "123450";
//     const start = board.flat().join(""); // Flatten the board and convert to string

//     // Neighbors map for each index in the 1D representation of the board
//     const neighbors = {
//         0: [1, 3],
//         1: [0, 2, 4],
//         2: [1, 5],
//         3: [0, 4],
//         4: [1, 3, 5],
//         5: [2, 4]
//     };

//     // BFS setup
//     const queue = [[start, 0]]; // [state, moves]
//     const visited = new Set();
//     visited.add(start);

//     while (queue.length > 0) {
//         const [state, moves] = queue.shift();

//         // Check if we've reached the target
//         if (state === target) {
//             return moves;
//         }

//         // Find the index of zero
//         const zeroIndex = state.indexOf("0");

//         // Generate new states by swapping '0' with its neighbors
//         for (const neighbor of neighbors[zeroIndex]) {
//             // Convert state to an array for mutation
//             const newState = state.split("");
//             // Swap '0' with the neighbor
//             [newState[zeroIndex], newState[neighbor]] = [newState[neighbor], newState[zeroIndex]];
//             // Convert back to string
//             const newStateStr = newState.join("");

//             // If this new state hasn't been visited, add it to the queue
//             if (!visited.has(newStateStr)) {
//                 visited.add(newStateStr);
//                 queue.push([newStateStr, moves + 1]);
//             }
//         }
//     }

//     // If we exhaust the queue without finding the target
//     return -1;
// };
