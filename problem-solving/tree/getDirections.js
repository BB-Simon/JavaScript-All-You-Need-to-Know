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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  function travel(node, target, path) {
    if (!node) return false;
    if (node.val === target) return true;

    let l = travel(node.left, target, path);
    let r = travel(node.right, target, path);

    if (l) path.push('L');
    if (r) path.push('R');

    return l || r;
  }

  let startPath = [];
  let destPath = [];

  travel(root, startValue, startPath);
  travel(root, destValue, destPath);

  while (startPath.length && destPath.length && startPath[startPath.length - 1] === destPath[destPath.length - 1]) {
    startPath.pop();
    destPath.pop();
  }

  return "U".repeat(startPath.length) + destPath.reverse().join("");

};