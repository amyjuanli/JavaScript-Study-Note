# GROUPING SUBEXPRESSIONS
```javascript
let cartoonCrying = /boo+(hoo+)+/i; // /i makes case insensitive
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true
```
## `exec`
Instead of only return true or false by using `.test`, `exec` returns *null* when it doesn't find the pattern and returns the whole string which is matched. 

```javascript
let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100", index: 8, input: "one two 100", groups: undefined]
console.log(match.index);
// → 8

// `match` works similarly 
console.log("one two 100".match(/\d+/));
// → ["100"]
```
## Grouping Subexpression - match once
When the regular expression contains subexpression grouped by parenthesis, the text matched for the group will also show up:  
The first element: the whole match;  
The next element: the first group;
The next element: the second group;
...
```javascript
// without parenthesis
let quotedText = /'[^']*'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'"]

// add parenthesis 
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]
```
## Grouping Subexpression - match zero
If a subexpression ends up not matching at all, its position returns *undefined*: 
```javascript
console.log(/bad(ly)?/.exec("bad"));
// → ["bad", undefined] // (ly)? not matched in "bad" string
```
## Grouping Subexpression - match more than once
If a subexpression ends up matching more than once, its position returns the last match in the string:  
```javascript
console.log(/(\d)+/.exec("123"));
// → ["123", "3"] // only show "3", the last match of the group
```
## Grouping - extracting parts of a string
With *group*, we not only can find whether if there is a match in a string, but extract the matched parts of the string.  