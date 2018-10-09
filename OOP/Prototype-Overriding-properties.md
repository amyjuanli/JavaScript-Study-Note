
## Overriding properties

It can be useful as it allows different method with same name:

```javascript
console.log(Array.prototype.toString == Object.prototype.toString);
// → false

console.log([1, 2].toString());
// → 1,2
Array.prototype.toString.call([1, 2]);
// → "1,2"

console.log(Object.prototype.toString.call([1, 2]));
// this function doesn't know about array, so it puts the word object and the
// name of the type between []
// → [object Array]

let person = { name: "Tomy", age: "31" };
Object.prototype.toString.call(person);
// → "[object Object]"
console.log(person.toString());
// → "[object Object]"
```

Explanation: Calling `toString` on an array gives a result similar to calling  
`.join(",")` on i.

An example to demonstrate its usefulness:

```javascript
String(weirdRabbit);
// →  "[object Object]"
Rabbit.prototype.toString = function() {
  return `A cute ${this.type} rabbit`;
};
String(weirdRabbit);
// → "A cute weird rabbit"
```
