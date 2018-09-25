## A Quick Demo

A _map_ is a data structure that associate values (the _keys_) with other values.
Although you can use an object:

```javascript
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false

console.log(ages);
// → {Boris: 39, Liang: 22, Júlia: 62}
// → Boris: 39
// → Júlia: 62
// → Liang: 22
// → __proto__: Object
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true
```

See the problem existing in using plain object:
As the `ages` object is derived from `Object.prototype`, so `toString` is there.  
To create a _pure_ map, we can try `Object.create`

```javascript
// given:
Object.create(null);
// → {}
// → No properties

// so
"toString" in Object.create(null);
// → false
```

With class `Map`, we can create a map which stores a mapping and allows any type of keys.

```javascript
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
Map(3) {"Boris" => 39, "Liang" => 22, "Júlia" => 62}
// → size:(...)
// → __proto__: Map

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
// `has` and `hasOwnProperty` ignore the object's prototype
console.log(ages.has("toString"));
// → false
console.log(ages.hasOwnProperty("toString"));
// → false
console.log("toString" in ages); //
// → true
```

Notice the differences between `hasOwnProperty` and `in`:

```javascript
console.log({ x: 1 }.hasOwnProperty("x"));
// → true
console.log({ x: 1 }.hasOwnProperty("toString"));
// → false
```
