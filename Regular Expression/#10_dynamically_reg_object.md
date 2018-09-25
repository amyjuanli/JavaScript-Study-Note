There are some cases where you don't know the target pattern. 
```javascript
// when the target pattern `name` is like this:
let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(regexp);
// → /\b(harry)\b/gi
console.log(text.replace(regexp, "_$1_"));
// → _Harry_ is a suspicious character.

// when the target pattern `name` is like this:
let name = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
console.log(escaped)
// → dea\+hl\[]rd
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));
// → This _dea+hl[]rd_ guy is super annoying.
```

