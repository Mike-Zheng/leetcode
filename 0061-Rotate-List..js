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
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  var cur = head;
  var maps = [];
  while (cur != null) {
    maps.push(cur);
    cur = cur.next;
  }

  var length = maps.length;
  maps[length - 1].next = head;
  var re = maps[length - 1 - (k % length)].next;
  maps[length - 1 - (k % length)].next = null;

  return re;
};
