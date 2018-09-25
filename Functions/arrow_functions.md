## Basic syntax
```javascript
(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; } 

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }
```
## Advanced syntax 
```javascript
// Parenthesize the body of function to return an object literal expression:
params => ({foo: bar}) 

// Rest parameters and default parameters are supported
(param1, param2, ...rest) => { statements } 
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { 
statements } 

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 6
```






#### Useful resources:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4