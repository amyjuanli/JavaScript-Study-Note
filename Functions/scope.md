## variable scope in functions
A variable has **global scope** when it exists during the life of the program and  
is accessible from anywhere in the program;  
A variable has **function scope** when it is defined within functions, and not  
accessible from outside of the function, and is ceases to exists when function  
finishes execution.
```javascript
var num = 1;          // variable is global
function showGlobal() {
  alert(num);         // uses the global num
}
showGlobal();         // => 1
function showLocal(){
  var num = 2;        // num is local, hides the global num
  alert(num);
}
showLocal();           // => 2
function showArgument(num) {
    alert(num);       // arguments are locally scoped
}
showArgument(3);      // => 3
```
A nested(inner) function can access the arguments and variables in the outer
function it's nested in. 
```javascript
function verify (name) {            // outer function
    function isJohn() {             // inner function
        return name === "John";     // full access to argument
    }
    if (isJohn()) {
        alert("Yep, this is John");
    }
}
verify("John");
```

## block-level scoping
JavaScript does not support block-level scoping, which is the
same as in Python.  
