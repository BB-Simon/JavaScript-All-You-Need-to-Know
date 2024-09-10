/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  }

  let curr = head;
  let prev = null;
  let index = 0;

  while (curr) {
    if (index > 0) {
      let x = gcd(prev.val, curr.val);
      let newNode = new ListNode(x);
      newNode.next = curr;
      prev.next = newNode
    }

    prev = curr;
    curr = curr.next

    index += 1;
  }

  return head
};