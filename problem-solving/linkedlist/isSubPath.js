/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  const checkPath = (head, root) => {
    if (!head) return true;
    if (!root || head.val !== root.val) return false;
    return checkPath(head.next, root.left) || checkPath(head.next, root.right);
  };

  if (!root) return false;
  if (checkPath(head, root)) return true;
  return isSubPath(head, root.left) || isSubPath(head, root.right);
};