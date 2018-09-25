There are several ways to create objects in JavaScript:

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
prototype that you passed as its first argument. You don't need to go through

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

#### Useful resources:

- https://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
