# PROMISES 
## Create a promise - calling `Promise.resolve`
This is a easies way to create a promise.
```javascript
// Returning a *Promise* object that is resolved with the given value
Promise.resolve(value);
// Returning a *Promise* that is passed as argument
Promise.resolve(promise);
// Returning a thenable (has a `then` method)
Promise.resolve(thenable); 
```
`Promise.resolve(value)`:
```javascript
var promise1 = Promise.resolve([1, 2, 3]);

promise1.then(function(value) {
  console.log(value);
  // expected output: Array [1, 2, 3]
});
```
`Promise.resolve(promise)`:
```javascript
var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));

// logs, in order:
// original === cast ? true
// value: 33
```
**What a `then` method does?**
The resolves handler (`then`) returns another *promise*, which resolves to the value 
that the handler function returns or, if that returns a promise, waits for that 
promise and then resolves to its result.



## Create a promise - `Promise` constructor 
```javascript
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
});
```
A simple example from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">MDN</a>:
```javascript
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});
```
Summary: the *promise-based functions* look similar to regular ones: they take input
as arguments and return output. The only difference is that their output may not be available yet
(when available, *resolve handlers* (as registered with `then` are called)

## More examples for a better understanding of `Promise.resolve` / `new Promise()`
```javascript
// #1: Converting a value to a resolved promise: 
var value = 10;
var promiseValue = Promise.resolve(value);
promiseValue
// → Promise {<resolved>: 10}
// equivalent to 
var promiseValue = new Promise(function(fulfill) {
    fulfill(value);
});

// #2: 
```

