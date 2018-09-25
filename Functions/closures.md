
## Closures
Whenever you create a function within another function, you have created a closure.  
 The inner function is the closure. This closure is usually returned so you can   
 use the outer function's variables at a later time.  
Think of function values as containing both the code in their body and the 
environment in which they were created. 

```javascript
function outerFunction () {
  const outer = `Variable inside the outer function`
  function innerFunction() {
    console.log(outer)
  }
  return innerFunction
}
const outer = 'Variable outside the outer function';
outerFunction()();
// -> `Variable inside the outer function`
```

```javascript
function outerFunction () {
  const outer = `Variable inside the outer function`
  function innerFunction() {
    console.log(outer)
  }
  return innerFunction
}
const outer = 'Variable outside the outer function';
outerFunction()();
// -> `Variable inside the outer function`
```


```javascript
function outerFunction () {
//   const outer = `Variable inside the outer function`
  function innerFunction() {
    console.log(outer)
  }
  return innerFunction
}
const outer = 'Variable outside the outer function';
outerFunction()();
// -> `Variable outside the outer function`
```





Code examples from EJS (http://eloquentjavascript.net/03_functions.html):
```javascript
/*
 example 1:
 */ 
function wrapValue(n) {
  let local = n; 
  // The explicit 'local' binding isn't really needed since a parameter is  
   itself a local binding. eg:
  // function say(words) {
  //   words = 'hello world from inside';
  //   console.log(words);
  // }
  // say('hello world from outside');
  // -> 'hello world from inside'
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2


/* 
  example 2: 
  With closure, we can use function values in some creative ways:
*/
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10
```



