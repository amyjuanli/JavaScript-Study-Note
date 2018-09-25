## Global object

When calling a function, `this` refers to the _global object_.  
The _global object_ depends on how you execute your code:  
browser -> window object,  
node.js -> global.

```javascript
function f1() {
  return this;
}

// In a browser:
f1() === window; // true

// In Node:
f1() === global; // true
```

## Strict mode

In _strict mode_, however, the value of `this` remains at whatever it was set to when entering 
the _execution context_.  `this` will default to `undefined` if not defined by the execution context.

````javascript
function f2() {
  "use strict"; // see strict mode
  return this;
}

f2() === undefined;
// → true```
````

## Passing the value of `this` from one context to another using `call` or `apply`.

```javascript
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = { a: "Custom" };

// This property is set on the global object
var a = "Global";

function whatsThis() {
  return this.a; // The value of this is dependent on how the function is called
}

whatsThis();
// → 'Global'
whatsThis.call(obj);
// → 'Custom'
whatsThis.apply(obj);
// → 'Custom'
```

## Binding to different objects

```javascript
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// The first parameter is the object to use as 'this', subsequent parameters are passed as arguments 
// in the function call  
add.call(o, 5, 7);
// → 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]);
// → 34
```

## Lexical `this` -- Object Context
Each function has its own `this` binding. You cannot refer to the `this` of the  
wrapping scope in a regular function. Before ES6, we use `.bind(this)` and  
`self=this` to refer to the object context in the top-level scope:
```javascript
/* ES5 Function Object Context */

// v1
var evens = [];
var self = this;
this.nums.forEach(function(v) {
  if (v % 2 === 0) self.evens.push(v);
})

// v2
this.nums.forEach(function(v) {
  if (v % 2 === 0) this.evens.push(v);
}, this);

// v3
this.nums.forEach(function(v) {
  if (v % 2 === 0) this.evens.push(v);
}.bind(this));


/* ES6 Arrow Function Object Context */
this.nums.forEach(v => {
  if (v % 2 === 0) this.evens.push(v);
});
```

But arrow functions don't bind their own `this` but can see the `this` binding  
of the scope around them.