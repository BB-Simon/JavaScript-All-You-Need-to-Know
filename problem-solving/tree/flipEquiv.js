/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
  function checker(node1, node2) {
    // If both nodes are null, they are equivalent
    if (!node1 && !node2) return true;
    // If one is null or the values don't match, they are not equivalent
    if (!node1 || !node2 || node1.val !== node2.val) return false;

    // Check if children are flip equivalent (with or without a flip)
    return (
      (checker(node1.left, node2.left) && checker(node1.right, node2.right)) ||
      (checker(node1.left, node2.right) && checker(node1.right, node2.left))
    );
  }

  return checker(root1, root2);
};