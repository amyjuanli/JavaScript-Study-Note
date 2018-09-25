# WORD AND STRING BOUNDARIES
## String boundary
`^`, `$`  
The caret matches the start of the input string, whereas the dollar sign matches the end.

## Word boundary - `\b` 
`\b` matches the position between a word character followed by a non-word character, or between a non-word character followed by a word character, or the beginning of the string, or the end of the string.
```javascript
console.log(/cat/.test("concatenate"));
// → true
console.log(/\bcat\b/.test("concatenate"));
// → false
```
Not be confused with `[\b]` which matches the backspace; 
`\B` indicates *non-word boundary*:  
/\B../ matches 'oo' in "noonday", and /y\B./ matches 'ye' in "possibly yesterday."