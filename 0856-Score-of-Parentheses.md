# 0856-Score-of-Parentheses

找規律

```
()
```
* push 0
* pop 0 *



```
(())
```
* push 0
* push 1
* pop 1  *
* pop 1


```
()((()(())))
```
* push 0
* pop 0 *
* push 0
* push 1
* push 2
* pop 2 *
* push 2
* push 3 
* pop 3 *
* pop 2
* pop 1
* pop 0

發現"(" 後的 ")"pop才會計分

```
loop
  ...
  stack.push(dep)
  
  if()
  ans += 2^dep

```