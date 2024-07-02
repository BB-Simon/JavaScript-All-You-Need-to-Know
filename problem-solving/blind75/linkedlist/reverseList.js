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

function push (h, num) {
  let node = new ListNode(num)
  if(h === null){
    h = node
    return;
  }

  let current = h;
  while(current.next !== null){
    current = current.next
  }
  current.next = node;

  return h;
}
      
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (h) {

  if(h === null || h.next === null){
    return h;
  }

  let reset = reverseList(h.next);
  h.next.next = h;
  h.next = null;
  h = reset;

  return h
};

let h = new ListNode();
h = push(h, 1)
h = push(h, 2)
h = push(h, 3)
h = push(h, 4)
h = push(h, 5)

console.log(h);
h = reverseList(h)
console.log(h);
