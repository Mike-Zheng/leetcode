/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dic = {};
  let seg1 = [];
  let seg2 = [];
  let seg3 = [];

  let node = head;
  let state = 0;
  let index = 1;
  while (node) {
    dic[index] = node;

    if (index == left) {
      state = 1;
    }

    if (state == 0) {
      seg1.push(index);
    } else if (state == 1) {
      seg2.push(index);
    } else if (state == 2) {
      seg3.push(index);
    }

    if (index == right) {
      state = 2;
    }
    node = node.next;
    index++;
  }

  let order = [...seg1, ...seg2.reverse(), ...seg3];

  for (let i = 0; i < order.length; i++) {
    let key = order[i];
    if (i === order.length - 1) {
      dic[key].next = null;
    } else {
      let next = order[i + 1];
      dic[key].next = dic[next];
    }
  }

  let key = order[0];

  return dic[key];
};
