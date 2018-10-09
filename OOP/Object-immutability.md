## IMMUTABILITY

With objects, there is a difference between having two references to the same  
object and having two different objects that contain the same properties.

```javascript
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false (different objects return false even if having identical properties)
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```

Explanation: The `object1` and `object2` bindings grasp the same object, which  
 is why changing `object1` also changes the values of `object2`. The bindings `object3` points to a different object, which just contains the same properties  
 as `object1` but lives a separate life.

```javascript
// Though a `const` binding to an object can itself not be changed and continue
// to point at the same object, the contents of that object might change.
const score = { visitors: 0, home: 0 };
// This is okay
score.visitors = 1;
// This isn't allowed
score = { visitors: 1, home: 1 };
```

