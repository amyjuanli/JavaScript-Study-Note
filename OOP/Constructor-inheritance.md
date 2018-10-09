Given an constructors _Bird_ and _Dog_:

```javascript
function Bird(name) {
  this.name = name;
}
let duck = new Bird("Donald");

function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Tom");
```

_duck_ inherits its _prototype_ from the _Bird_ constructor function.  
You can check the relationship with the _isPrototypeOf_ method:

```javascript
Bird.prototype.isPrototypeOf(duck);
// returns true
```

1. Using _inheritance_ to avoid repeating yourself

```javascript
// Bird
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// Dog
Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Instead of having a repeated method - _describe_ in both places, we can create a
supertype:

```javascript
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

2. Inheriting behavior from the _supertype_ (or parent) _Animal_: 
   Step one: making a new instance of _Animal_

```javascript
// function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

// let animal = new Animal();
let animal = Object.create(Animal.prototype);
animal
// => {constructor: ƒ, describe: ƒ, eat: ƒ}

animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true

 let duck = new Bird("Donald"); // at this moment, 'duck' cannot 'eat'
 duck 
//  => Bird {name: "Donald"}
```

   Step two: Setting the Child's Prototype to an Instance of the Parent
   Setting the _prototype_ of the _subtype_ (or child)-in this case, _Bird_-to be
   an instance of _Animal_
   ```javascript
   Bird.prototype = Object.create(Animal.prototype); 
   ```
   Remember that the _prototype_ is like the _recipe_ for creating an object.
   The _obj_ in the `Object.create(obj)` is the _recipe_, for instance.  
    Now the _recipe_ in _Bird_ -_Animal.prototype_-includes all the key _ingredients_ from _Animal_.
   ```javascript
   let duck = new Bird("Donald"); // now, 'duck' can 'eat'
   duck.eat(); // prints "nom nom nom"
   ```

```

```
