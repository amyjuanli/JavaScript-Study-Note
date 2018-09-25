## overwrite a declared variable ?

With `var` keyword, you can overwrite variable declarations:

```javascript
var camper = "James";
var camper = "David";
console.log(camper);
// → 'David'
```

In some cases, you might want this feature, but you might as well accidentally  
overwrite a variable that you did not intend to overwrite.  
Unlike `var`, when using `let`, a variable with the same name can only be declared once.

```javascript
let camper = "James";
let camper = "David"; // throws an error
```

## Compare scopes

- When you declare a variable with the `var` keyword, it is declared globally,  
  or locally if declared inside a function.
- When you declare a variable with the `let` keyword inside a block, statement,  
  or expression, its scope is limited to that block, statement, or expression.

With the `var`, `i` is declared globally. So `i++` actually updates the global  
variable `i`:

```javascript
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// → [0, 1, 2]
console.log(i);
// → 3
```

Same as:

```javascript
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// → [0, 1, 2]
console.log(i);
// → 3
```

This will cause problems if you were to create a function for later use inside  
a for loop that uses the `i` variable since the stored function will always refer  
to the value of the updated global `i` variable.

```javascript
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// → 3
console.log(i);
// → 3
```

Explanation:  
The reason for the unexpected output is because the value assigned to `i` was  
updated and `printNumTwo()` returns the global `i` rather than the value `i` had  
when the function was created in the for loop.  
But the `let` keyword doesn't follow that behavior:

```javascript
"use strict";
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// → 2
console.log(i);
// → "i is not defined"
```

Explanation:  
`i` is not declared in the global scope but within the for loop statement.  
Three different `i` variables with values (0, 1, 2) were created within the for  
loop statement.

Useful resources:

- freecodecamp.org
