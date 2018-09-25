We say the repetition operations such as `+`, `*`, `?`, and `{}` are greedy operator, meaning they match as much as possible. But if putting `?` after them, like `+?`, `*?`, `??`, `{}?`, they become non-greedy operators, matching as little as possible. 
```javascript
// greedy 
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// → 1 + 3
console.log(stripComments("x = 10;// ten!"));
// → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1  1     (something wrong in here
)

// non-greedy
// with `[^]*?` match the smallest stretch of characters that bring us the `*/`, in which way we  
// consume one comment block instead of more 
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1 + 1
```
Explanation:  
`[^]` was used to match any character (any character that is not included in empty character set). 
The reason not using `.` is because that period doesn't match *newline* character which might be included between a `/*` and `*/` comment block.  
In practice, when using repetition operators, consider using non-greedy first.