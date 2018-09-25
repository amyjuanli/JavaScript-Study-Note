Three ways of defining functions in JavaScript: 
## function declaration
function declaration can appear in top-level of javascript program
```javascript
function say(name) {
    alert("Hello " + name);
}
say("Nico");              // => Hello Nico
```
However, functions can also be nested
```javascript
function hypotenuse(m, n) {        // outer function
    function square(num) {         // inner function
       return num * num;
    }
    return Math.sqrt(square(m) + square(n));
}
alert(hypotenuse(3,4));            // => 5
```

## function expression 
functions are assigned to a variable  
Notice: the function itself does not have a name (it's anonymous function)
```javascript
var area = function (radius) {
    return Math.PI * radius * radius;
};
alert(area(5));         // => 78.5
```
function declaration vs function expressions:
* function is part of an assignment--> its function expressions
* function declaration does not end with a semicolon while function expression
does as it's part of an assignment
* function declaration must have a name while function expression may or may not have a name (named or anonymous function)

## `Function` constructor
Creates a new `Function` object:
```javascript
var sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// expected output: 8
```

## Summary
* Choosing *function declarations* or *function expressions* is up to you.   
  If you think with *function expressions* can help you write predicable and structural   code, then stick to it. 