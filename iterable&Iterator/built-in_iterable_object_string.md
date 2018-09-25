
```javascript
// example 1:
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}

// example 2:
let helloIterator = "hello"[Symbol.iterator](); // create a `iterator`
helloIterator;
// → StringIterator {}
// → __proto__: String Iterator
// → next: ƒ next()
// → Symbol(Symbol.toStringTag): "String Iterator"
// → __proto__: Object
for (char of helloIterator) {
  console.log(char);
}
// → h
// → e
// → l
// → l
// → o
// → undefined
helloworldIterator.next();
// → {value: undefined, done: true}
```
