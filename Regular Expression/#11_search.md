Same as `indexOf`, `search` return `-1` when it doesn't find matched pattern, and return the position of first match. But `search` can take reg as argument: 
```javascript
console.log("  word".search(/\S/));
// → 2
console.log("    ".search(/\S/));
// → -1
```
`\S` matches any non white space character. 