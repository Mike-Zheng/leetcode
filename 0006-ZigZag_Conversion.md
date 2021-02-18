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

比如字符串是s="PAYPALISHIRING"，rowNum=4。我們可以創建四個字串：

""

""

""

""

然後我們按照Z形一個字母一個字母地放進這些空陣列當中：

當放了第一個字母p之後，變成：

"P"

""

""

""

接著放第二個：

"P"

"A"

""

""

接著第三個：

"P"

"A"

"Y"

""

當我們把所有字母都放完了之後，可以得到這樣的四個陣列：

"PIN"

"ALSIG"

"YAHR"

"PI"

然後把這四個陣列拼接在一起就完成。


在來是考慮效率部分

## 進階思考

每次Z形一round的數量

當rowNum = 3, roundLength = 4



```
1   
2 4 
3   
```

當rowNum = 4, roundLength = 6

```
1    
2   6
3 5
4
```

當rowNum = 5, roundLength = 8

```
1    
2     8
3   7
4 6
5
```
...

數學歸納法可以發現:

每一round一個Z形一共 "2n-2" 個數量

```
rowNum=3 ,oneRoundLength=4
rowNum=4 ,oneRoundLength=6
rowNum=5 ,oneRoundLength=8
...
```

而 當Z形開始逆向的時候
這邊把每個round的index 簡稱為ri
對應的空陣列index 為 2n-ri-1

```
rowNum=3 ,oneRoundLength=4
[0] 1   
[1] 2 4
[2] 3 

4對應的index 為
2n-ri-1
2*3-4-1 = 1

```

```
rowNum=5 ,oneRoundLength=8
[0] 1    
[1] 2     8
[2] 3   7
[3] 4 6
[4] 5

8對應的index 為
2n-ri-1
2*5-8-1 = 1

```

推導到這裡我們就可以用線性的方式完成此問題




### 時間複雜度

```
O(n)
```

### 程式碼

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let stringList = s.split("");
  if (stringList.length <= 1 || numRows <= 1) {
    return s;
  }

  let zq = Array(numRows).fill("");

  let oneRoundLength = 2 * numRows - 2;

  stringList.forEach((char, j) => {
    let indexInCircle = (j + 1) % oneRoundLength;
    if (indexInCircle === 0) indexInCircle = oneRoundLength;

    if (indexInCircle <= numRows) {
      zq[indexInCircle - 1] += char;
    }

    if (indexInCircle > numRows) {
      zq[2 * numRows - indexInCircle - 1] += char;
    }
  });

  return zq.join("");
};

```



```
Runtime: 100 ms, faster than 92.87% of JavaScript online submissions for ZigZag Conversion.
Memory Usage: 42.7 MB, less than 77.26% of JavaScript online submissions for ZigZag Conversion.
```