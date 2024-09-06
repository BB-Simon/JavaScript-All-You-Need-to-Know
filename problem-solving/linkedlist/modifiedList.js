
//  Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
//  }

/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
  const mySet = new Set(nums);
  let current = new ListNode(null, head);
  let newHead = current

  while (current.next) {
    if (mySet.has(current.next.val)) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return newHead.next
};