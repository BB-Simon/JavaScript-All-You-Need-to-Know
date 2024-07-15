/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  let root = null;
  const hash = {};
  const hasParent = new Set();

  for (let desc of descriptions) {
    if (!hash[desc[0]]) {
      hash[desc[0]] = new TreeNode(desc[0])
    }

    if (!hash[desc[1]]) {
      hash[desc[1]] = new TreeNode(desc[1])
    }

    hasParent.add(desc[1])
  }

  for (let desc of descriptions) {
    if (desc[2] === 1) {
      hash[desc[0]].left = hash[desc[1]]
    } else {
      hash[desc[0]].right = hash[desc[1]]
    }

    if (!hasParent.has(desc[0])) {
      root = hash[desc[0]]
    }
  }
  return root
};