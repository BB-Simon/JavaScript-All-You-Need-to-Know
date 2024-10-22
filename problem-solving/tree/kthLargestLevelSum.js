/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  if (!root) return -1;

  // Min heap to track the k largest sums
  let minHeap = new MinPriorityQueue({ priority: x => x });

  // BFS to traverse level by level
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelSum = 0;

    // Process all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelSum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // Add the level sum to the min-heap
    minHeap.enqueue(levelSum);

    // Maintain only k largest sums
    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }

  // If the tree has fewer than k levels, return -1
  if (minHeap.size() < k) return -1;

  // The top of the min-heap is the k-th largest sum
  return minHeap.front().element;
};