- Operations: `delete`, `in`

```javascript
let anObject = { left: 1, right: 2 };

console.log(anObject.left);
// → 1

// 'delete a property'
// the property is no longer existent
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false

// set a property to undefined
// the property exists (just doesn't have an interesting value)
anObject.middle = undefined;
console.log(anObject.middle);
// → undefined
console.log("middle" in anObject);
// → true

console.log("right" in anObject);
// → true
```

- keys/property

```javascript
// find out what properties an object has
console.log(Object.keys({ x: 0, y: 0, z: 2 }));
// → ["x", "y", "z"]

// copy all properties from one object into another
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

- _if (key in object)_
  return true if _key_ is found somewhere even in the prototype chain,
- _if (object.hasOwnProperty(key))_:  
   return true only if _key_ is available on that object directly (which means the object owns that key property)

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

## COMPARING OBJECTS

`==` operator compares objects by identity (see the above example): it will  
only produce _true_ only if both objects are precisely the same value.  
Comparing different objects will return _false_, even if they have identical  
properties.
