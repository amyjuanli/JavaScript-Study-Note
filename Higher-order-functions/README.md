# HIGHER-ORDER FUNCTIONS
> There are two ways of constructing a software design: One way is to make it  
> so simple that there are obviously no deficiencies, and the other way is to  
>  make it so complicated that there are no obvious deficiencies.
>
> &mdash; <cite>C.A.R. Hoare, 1980 ACM Turing Award Lecture</cite>

> A large program is a costly program, and not just because of the time it takes  
>  to build. Size almost always involves complexity, and complexity confuses  
> programmers. Confused programmers, in turn, introduce mistakes (bugs) into  
> programs. A large program then provides a lot of space for these bugs to hide,  
>  making them hard to find.
>
> &mdash; <cite>ELOQUENT JAVASCRIPT</cite>

*Higher-Order Functions are the most important part of functional programming   
because of less bugs and less time.*   
*In functional programming, one of the foundations is its use of lists and their  
 operations. For instance, JavaScript have built-in methods that are higher order  
  functions: `map`, `filter`, and `reduce`, whihchh can transform initial  
  list(array) into new list, while keeping original list intact.*   

## Functions are values:
All programming languages have functions, but not all of them can have the   
following behaviors: 
```javascript
// first we create an anonymous function and pass it to a variable 
var triple = function(x) { 
    return x * 3;
}
// pass the function to a variable and call the function by the variable with parenthesis 
var waffle = triple;
waffle(30);
```
## Composition
*Higher-Order Functions are the most important part of functional programming  
because of less bugs and less time. In other words, you can write   
**Composing Software**.*    
*Higher-Order Functions* allows you to write *declarative* approach, without  
using imperative `for/while` loops to process arrays. Instead, using `forEach`, etc.  
All of these make your code more readable, reusable, maintainable, and more  
elegant. 

eg: 
Without *higher-order functions*: 
```javascript
let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null ||
      characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
console.log(biggest);
// → {name: "Han", …}
```
Using *higher-order functions* -- `reduce`
```javascript
console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}
```



### Useful resources:
* http://eloquentjavascript.net/05_higher_order.html (code examples)
* https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99
* https://hackernoon.com/functional-programming-in-js-map-filter-reduce-pt-5-308a205fdd5
* https://www.airpair.com/javascript/posts/mastering-es6-higher-order-functions-for-arrays
