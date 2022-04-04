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
var swapNodes = function (head, k) {
    var listMap = [];
    var cur = head;
    while (cur) {
        listMap.push(cur);
        cur = cur.next;
    }

    var l = listMap.length;
    var swap = listMap[k - 1].val;
    listMap[k - 1].val = listMap[l - k].val;
    listMap[l - k].val = swap;

    return head;
};
