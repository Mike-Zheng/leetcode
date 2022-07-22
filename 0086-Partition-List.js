/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  var segLess = [];
  var segGreater = [];
  let node = head;
  while (node) {
    if (node.val >= x) segGreater.push(node);
    else {
      segLess.push(node);
    }
    node = node.next;
  }
  let order = [...segLess, ...segGreater];
  let length = order.length;
  for (let i = 0; i < order.length - 1; i++) {
    order[i].next = order[i + 1];
  }

  if (length === 0) return head;
  order[length - 1].next = null;

  return order[0];
};
