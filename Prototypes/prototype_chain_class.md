```javascript
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
killerRabbit
// → Rabbit {type: "killer"}
// →   type: "killer"
// →   __proto__:Object
killerRabbit.prototype 
// → undefined

Rabbit.prototype == Object.getPrototypeOf(killerRabbit)
// → true
// → {constructor: ƒ, speak: ƒ}
```