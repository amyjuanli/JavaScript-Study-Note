`this` points to the newly-created object through the constructor function when  
using `new` operator.
```javascript
var Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(this) // when calling Person without `new` -> global object
}
var Tomy = new Person('Tomy', 'Smith');
Tomy
// → Person {firstName: "Tomy", lastName: "Smith"}
```
But if you directly call the function without `new` operator, then `this` points to  
the global object.
```javascript
Person('Tomy', 'Smith');
// → Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
```
