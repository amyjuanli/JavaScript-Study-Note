## function hoisting.
Function can be invoked before declaration because JavaScript engine implicitly  
hoists the function to the top of the program before any code is executed,  
 which makes it visible throughout the whole program.  
 This allows you to simply call a function before declaring it. 
```javascript
alert(course());        // => Learning JS
function course(){      // hoisted to top of program
   return "Learning JS";
}
```
However, *function expressions* do not hoist.
```javascript 
// Case 1: 
// success since the fn declaration is 'hoisted' to the top of the current scope   // // before execution.
fn();
function fn() { alert("test"); }

// Case 2: 
// error since fn is called before the function is assigned, although the variable  
// declaration is hoisted.
fn();
var fn = function (){ alert("test"); }
// -> TypeError: fn is not a function
```

