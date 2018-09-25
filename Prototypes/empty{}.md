
```javascript
let empty = {};
console.log(empty);
// → {}__proto__:
// → constructor: ƒ Object()
// → hasOwnProperty: ƒ hasOwnProperty()
// → isPrototypeOf: ƒ isPrototypeOf()
// → propertyIsEnumerable: ƒ propertyIsEnumerable()
// → toLocaleString: ƒ toLocaleString()
// → toString: ƒ toString()
// → valueOf: ƒ valueOf()
// → __defineGetter__: ƒ __defineGetter__()
// → __defineSetter__: ƒ __defineSetter__()
// → __lookupGetter__: ƒ __lookupGetter__()
// → __lookupSetter__: ƒ __lookupSetter__()
// → get __proto__: ƒ __proto__()
// → set __proto__: ƒ __proto__()
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]
```

What is the prototype of the defined empty object:

```javascript
console.log(Object.getPrototypeOf(empty) == Object.prototype);
// → true
```
