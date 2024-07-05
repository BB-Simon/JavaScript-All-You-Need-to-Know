/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let ans = [-1, -1]
    let prev = head
    let current = head.next;
    let i = 1;
    let minCriticalIdx = null;
    let maxCriticalIdx = null;

    while(current.next){
        if(
            current.val > prev.val && current.val > current.next.val 
            || current.val < prev.val && current.val < current.next.val
        ) {
            if(minCriticalIdx !== null){
                if(ans[0] !== -1){
                    ans[0] = Math.min(ans[0], i - minCriticalIdx)
                } else {
                    ans[0] = i - minCriticalIdx
                }
            } else {
                maxCriticalIdx = i;
            }
            minCriticalIdx = i;
        }

        prev = current;
        current = current.next;
        i+=1;
    }

    if(minCriticalIdx !== maxCriticalIdx){
        ans[1] = minCriticalIdx - maxCriticalIdx;
    }
    
    
    return ans;
};