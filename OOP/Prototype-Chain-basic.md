```javascript
Object.prototype;
// → {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
Object.prototype.__proto__; // `prototype` of `Object` doesn't have a `__proto__`
// → null
Function.prototype;
// → ƒ () { [native code] }
Function.prototype.__proto__;
// → {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
Array.prototype;
// → [constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, …]
Array.prototype.__proto__;
// → {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
String.prototype;
// → String {"", length: 0, constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
String.prototype.__proto__;
// → {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
Number.prototype;
// → Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, toString: ƒ, …}
Number.prototype.__proto__;
// → {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

Object.getPrototypeOf(1); // return as output of `Number.prototype`
// → Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, toString: ƒ, …}
Object.getPrototypeOf("hello world"); // return as output of `String.prototype`
// → String {"", length: 0, constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
Object.getPrototypeOf({ name: "Tom" }); // return as output of `Object.prototype`
// → {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

---

## Really understand the _prototype chain_ by learning good examples:

1. All objects in Javascript (with a few exceptions) have a _prototype_.
2. An object's _prototype_ itself is an object
3. Because of a _prototype_ is an object, a _prototype_ can have its own _prototype_

   ```javascript
   function Bird(name) {
     this.name = name;
   }
   typeof Bird.prototype; // => object

   // The prototype of Bird.prototype is Object.prototype
   Object.prototype.isPrototypeOf(Bird.prototype);
   // returns true
   ```

4. And because a _prototype_ can have its own _prototype_, so ..
   ```javascript
   let duck = new Bird("Donald");
   duck.hasOwnProperty("name"); // => true
   ```
   The _hasOwnProperty_ method is defined in _Object.prototype_, which can be accessed
   by _Bird.prototype_, which can then be accessed by instance _duck_. This is a
   good example of _prototype chain_.  
   In the above chain, _Bird_ is the _supertype_ for _duck_, while _duck_ is the _subtype_.
   _Object_ is a _supertype_ for both _Bird_ and _duck_.
5. _Object_ is a _supertype_ for all objects in JavaScript. Therefore, any object
   can use the _hasOwnProperty_ method.

Similar to *hasOwnProperty* method, *isPrototypeOf* method is also defined in 
*Object.prototype*, but it can accessed by others: 

```javascript
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // => true

Object.prototype.isPrototypeOf(Dog.prototype); // => true
```
6. *Object.getPrototypeOf(obj)* returns the prototype of an object.