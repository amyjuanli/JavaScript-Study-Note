# ThE SECRET LIFE OF OBJECTS

> An abstract data type is realized by writing a special kind of program […]
> which defines the type in terms of the operations which can be performed on it.
>
> &mdash; <cite>Barbara Liskov, Programming with Abstract Data Types/cite>

## Ways to create object instances in JavaScript

- Declaring an object literal
- Using a constructor function
- Using _Object()_ constructor `new Object()`
- Using the _create()_ method `Object.create(..)`

##

Unlike other class-based languages (like JAVA or C++), JavaScript is a prototype-based  
language. When it comes to inheritance, JavaScript only has one construct: objects.
Each object has a private property which holds a link to another object called  
its **prototype**.

## Prototype Chain

The prototype object has a prototype of its own, and so on until an object is  
reached with `null` as its prototype. (**prototype chain)**

Many objects don't directly have `Object.prototype` as their prototype but instead  
have their own prototype objects which provide a different set of default properties.

```javascript
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true
```

#### References

- https://eloquentjavascript.net/06_object.html
- https://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
- https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
