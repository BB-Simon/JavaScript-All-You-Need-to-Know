/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  // Max heap to always pick the character with the highest count.
  const maxHeap = new MaxPriorityQueue({ priority: x => x[0] });

  // Push characters to the heap if their count is greater than 0
  if (a > 0) {
    maxHeap.enqueue([a, 'a']);
  }
  if (b > 0) {
    maxHeap.enqueue([b, 'b']);
  }
  if (c > 0) {
    maxHeap.enqueue([c, 'c']);
  }

  let result = [];

  // While there are elements in the heap
  while (!maxHeap.isEmpty()) {
    let [count1, char1] = maxHeap.dequeue().element;

    // If the last two characters are the same as char1
    if (result.length >= 2 && result[result.length - 1] === char1 && result[result.length - 2] === char1) {
      if (maxHeap.isEmpty()) {
        break; // No valid characters left to pick
      }

      let [count2, char2] = maxHeap.dequeue().element;
      result.push(char2);
      count2--;

      // If there are more occurrences of char2, add it back to the heap
      if (count2 > 0) {
        maxHeap.enqueue([count2, char2]);
      }

      // Push char1 back to the heap since it wasn't used
      maxHeap.enqueue([count1, char1]);
    } else {
      result.push(char1);
      count1--;

      // If there are more occurrences of char1, add it back to the heap
      if (count1 > 0) {
        maxHeap.enqueue([count1, char1]);
      }
    }
  }

  return result.join('');
};