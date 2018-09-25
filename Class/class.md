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

#### References

- https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
-
