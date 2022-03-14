# 0061-Rotate-List


**first take**

一開始沒看清楚題目以為是向左轉真簡單

```js
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  var cur = head;
  while (cur.next != null) {
    cur = cur.next;
  }
  cur.next = head;

  var pre = null;

  while (k--) {
    pre = head;
    head = head.next;
  }

  pre.next = null;

  return head;
};
```

後來發現大事不妙 medium 怎可能這樣出

思路:

1. 找長度
2. 然後頭尾相接
3. 歸納向下幾個 transform = length - (k % length)
4. 前一個要 next = null

```js
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  var cur = head;
  var last;
  var length = 0;
  while (cur != null) {
    length++;
    cur = cur.next;
    if (cur != null) {
      last = cur;
    }
  }
  last.next = head;

  var t = length - (k % length);

  cur = head;
  for (let i = 0; i < t - 1; i++) {
    cur = cur.next;
  }
  var re = cur.next;
  cur.next = null;

  return re;
};
```

summit 效能超低 被同事嘴後

改用 map array 大法

空間換取next 多次才能接到k的問題

思路
1. while一遍讓node 進入 maps，攏厚蕊
2. 頭尾相接
3. 給 transform = length - (k % length)
4. 前一個要 next = null

```js
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
```
