/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let ans = new Array(k).fill(null);
    let current = head;
    let count = 0;
    
    // Count the number of nodes
    while (current) {
        count++;
        current = current.next;
    }
    
    let width = Math.floor(count / k);
    let remainder = count % k;
    
    current = head;
    for (let i = 0; i < k; i++) {
        let subHead = current;
        
        // Calculate the size of current part
        let partSize = width + (i < remainder ? 1 : 0);
        
        // Move to the last node of current part
        for (let j = 0; j < partSize - 1 && current; j++) {
            current = current.next;
        }
        
        if (current) {
            let next = current.next;
            current.next = null;
            current = next;
        }
        
        ans[i] = subHead;
    }
    
    return ans;
};