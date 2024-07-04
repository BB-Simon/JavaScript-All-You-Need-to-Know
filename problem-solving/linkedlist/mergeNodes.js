/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function push(h, num) {
  let node = new ListNode(num)
  if (h === null) {
    h = node
    return;
  }

  let current = h;
  while (current.next !== null) {
    current = current.next
  }
  current.next = node;

  return h;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {

  // 1. Recurssive solution
  // if (!head.next) {
  //   return null
  // }

  // let x = 0;
  // let current = head.next;

  // while (current.val !== 0) {
  //   x += current.val
  //   current = current.next
  // }

  // head.next.val = x;
  // head.next.next = mergeNodes(current)
  
  // return head.next;

  // 2. Loop solution
  let current = head;
  while (current !== null && current.next !== null) {
    let sum = 0;
    let temp = current.next;

    // Sum the values between zeros
    while (temp !== null && temp.val !== 0) {
      sum += temp.val;
      temp = temp.next;
    }

    // Set the next node's value to the sum
    current.next.val = sum;

    // Move to the next segment of nodes
    if (temp !== null) {
      current.next.next = temp.next;
    }

    // Move current pointer to the next node in the list
    current = current.next;
  }

  return head.next;
};

let h = new ListNode();
h = push(h,3)
h = push(h,1)
h = push(h,0)
h = push(h,4)
h = push(h,5)
h = push(h,2)
h = push(h,0)

mergeNodes(h)

console.log({h})