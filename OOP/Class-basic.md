A quick demo:

```javascript
// example 1
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name); // => should be 'carrot'

//  example 2
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

## getter, setters
`getter`, `setter` are not just making clean code when comes to interface  
design, When you invoke them, `temp.fahrenheit`, the syntax doesn't look like function.

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30
```

Rewrite the above example:

```javascript
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```




#### References

- https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
-
