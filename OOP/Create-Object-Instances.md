## Object Literal

```javascript
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'
```

In some cases, you implicitly passing `this`:

```javascript
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

// object.method()
// 'this' automatically point to the object the method is called on
whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'
```

Or you can explicitly pass `this` using `function.apply` (the first parameter  
 refers to the object, the rest refer to a list of arguments if more than one)

```javascript
speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'
```

## Constructor

```javascript
// variant 1
function Car (description) {
    this.description = description;
    this.color = "red";
    this.getInfo = function getInfo() {
        return 'A ' + this.color + ' ' + this.description + '.';
    };
}

// variant 2
function Car (description) {
    this.description = description;
}
Car.prototype.color = "red";
Car.prototype.getInfo = function getInfo() {
        return 'A ' + this.color + ' ' + this.description + '.';
    };

// variant 3
function Car (description) {
    this.description = description;
}
Car.prototype = {
    color = "red";
    getInfo: function getInfo() {
        return 'A ' + this.color + ' ' + this.description + '.';
    };
}


//instantiate object using the constructor function
var car = new Car('Porsche boxter');
car.color = "blue";
alert(car.getInfo()); //displays 'A blue Porsche boxter.'
```

## Object.create()

### Syntax

`Object.create(proto[, propertiesObject])`  
The `proto` should be the prototype of the newly-created object.  
In the above, the object created by `new constructor()` inherits from the constructor's prototype.
However, with `Object.create()`, you can create an object with an specific  
prototype that you passed as its first argument.

```javascript
var Car2 = Object.create(null); //this is an empty object, like {}
Car2.prototype = {
  getInfo: function() {
    return "A " + this.color + " " + this.desc + ".";
  }
};

var car2 = Object.create(Car2.prototype, {
  //value properties
  color: { writable: true, configurable: true, value: "red" },
  //concrete desc value
  rawDesc: { writable: false, configurable: true, value: "Porsche boxter" },
  // data properties (assigned using getters and setters)
  desc: {
    configurable: true,
    get: function() {
      return this.rawDesc.toUpperCase();
    },
    set: function(value) {
      this.rawDesc = value.toLowerCase();
    }
  }
});
car2.color = "blue";
alert(car2.getInfo()); //displays 'A RED PORSCHE BOXTER.'
```

## Object.create() vs new ConstructorName();
* *Object.create(obj)* can build an object which doesn't inherit from anything
  ```javascript
    let obj = Object.create(null);
    obj; // {} 
  ```
* _Object.create()_ not execute constructor code, so the newly created object via it
cannot access the properties within the constructor.
