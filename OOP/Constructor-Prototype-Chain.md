**IMPORTANT**  
**Distinct the way a property is _associated_ with a constructor (through its  
_prototype_ property) and the way objects _have_ a prototype (through  
_Object.getPrototypeOf_)**

Prototype in _class_:

```javascript
/* Create a constructor and an instant object through it */
function Rabbit(type) {
  this.type = type;
  this.speak = function(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  };
}
Rabbit.prototype.cough = function() {
  console.log(`The ${this.type} rabbit cough`);
};

let weirdRabbit = new Rabbit("weird");

/* instant through the Rabbit */
weirdRabbit;
// → Rabbit {type: "weird", speak: ƒ}
weirdRabbit.__proto__;
// → {cough: ƒ, constructor: ƒ}
weirdRabbit.prototype; // no prototype defined to this instant
// → undefined

/* Rabbit constructor */
Rabbit.prototype;
// →  {cough: ƒ, constructor: ƒ}
Rabbit.__proto__;
// → ƒ () { [native code] }
Object.getPrototypeOf(Rabbit);
// → ƒ () { [native code] }
Function.prototype;
// → ƒ () { [native code] }

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// → true
// The new object's property is the object found in the `prototype` property of
// the constructor:
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// → true
```

Explanation:  
The actual prototype of a constructor is Function.prototype since constructors  
are functions. Its prototype property holds the prototype used for instances  
created through it.
