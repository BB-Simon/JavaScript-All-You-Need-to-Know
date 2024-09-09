/** 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
  let matrix = Array.from({ length: m }, () => Array.from({ length: n }).fill(-1))
  let r = 0;
  let c = 0;
  let dp = 0;
  let d = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let curr = head;


  while (curr) {
    matrix[r][c] = curr.val;
    curr = curr.next;
    const nextR = r + d[dp % 4][0];
    const nextC = c + d[dp % 4][1];

    if (0 <= nextR && nextR < m && 0 <= nextC && nextC < n && matrix[nextR][nextC] === -1) {
      r = nextR;
      c = nextC;
    } else {
      dp++;
      r = r + d[dp % 4][0];
      c = c + d[dp % 4][1];
    }
  }

  return matrix;
};