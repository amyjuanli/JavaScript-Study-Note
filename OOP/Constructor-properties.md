* Own property
  *Own properties* are defined directly on the object instance itself.   
* Prototype property, constructor property
*prototype properties* are defined on the prototype. The *prototype* is an object 
that is shared among ALL instance of constructor. 
```javascript
// Instead of 
function Bird(name) {
  this.name = name; //own property
  this.numLegs = 2
}

// using prototype to reduce duplicated code( *numLegs* duplicated in each instance)
function Bird(name) {
  this.name = name; //own property
  // this.numLegs = 2
}
Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```
*constructor property* is a reference to the constructor function that created the instance.
```javascript
let duck = new Bird();
console.log(duck.constructor === Bird); //prints true
```
By checking *constructor property*, we can find out what kind of an object:
```javascript
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```
Change the *Prototype* to a new object when adding many properties to the prototype is needed:
```javascript
// So, instead of 
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

// set the *prototype* to a new object 
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
Be caution: when manually setting the *prototype* to a new object, it erased the *constructor* property.
We need to always remember to define the *constructor* property in the prototype property.
```javascript
console.log(duck.constructor)
// prints ‘undefined’ - Oops!

Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```
