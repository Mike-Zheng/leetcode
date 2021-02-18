# LeetCode 0006 ZigZag_Conversion

> https://mike-zheng.github.io/

題目來源於 LeetCode #6 ZigZag_Conversion

## 題目描述

給定一個字符串，和一個整數n，將它排列成一個n行的蛇形返回。

## 示例

```


P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I


```


給定字符串和蛇形排列占據的行數，要求返回重新排列後的串

## 題目解析

這道題目需求明確，就像題意所示，將Z形排列後的文字組合傳回即可

比如字符串是s="PAYPALISHIRING"，rowNum=4。我們可以創建四個空陣列：
[]
[]
[]
[]

然後我們按照Z形一個字母一個字母地放進這些空陣列當中：

當放了第一個字母p之後，變成：
[P]
[]
[]
[]

接著放第二個：

[P]
[A]
[]
[]

接著第三個：

[P]
[A]
[Y]
[]

當我們把所有字母都放完了之後，可以得到這樣的四個陣列：
[PIN]
[ALSIG]
[YAHR]
[PI]

然後把這四個陣列拼接在一起就完成。

### 程式碼

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length === 1 || numRows === 1) return s;
  let zq = [];
  for (var i = 0; i < numRows; i++) {
    zq[i] = [];
  }

  let round_length = 2 * numRows - 2;

  s.split("").forEach((_, j) => {
    let index_in_circle = (j + 1) % round_length;
    if (index_in_circle === 0) index_in_circle = round_length;

    if (index_in_circle <= numRows) {
      zq[index_in_circle - 1].push(_);
    }

    if (index_in_circle > numRows) {
      zq[2 * numRows - index_in_circle - 1].push(_);
    }
  });

  return zq.map((_) => _.join("")).join("");
};
```

