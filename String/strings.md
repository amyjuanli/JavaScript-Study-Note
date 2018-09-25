## STRINGS AND THEIR PROPERTIES
Values of type string, number, and Boolean are not objects, and  
though JS language doesn't complain about this, but it doesn't store the addd new property.  
Importance: *string*, *number*, and *Boolean* are immutable.  
 You cannot add a new property like these: 
```javascript
let kim = "Kim";
kim.age = 88; 
console.log(kim.age);
// → undefined
```
String values have JS built-in properties: `length`, `toUpperCase`, and many useful methods:
```javascript
// `slice` and `indexOf` resembling the array methods of the same name
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
// difference to array: search for a string containing more than one char
console.log("one two three".indexOf("ee"));
// → 11

// removes whitespace(spaces, newline, tabs, and similar chars) from the start 
// and end of a string
console.log("  okay \n ".trim());
// → okay

console.log(String(6).padStart(3, "0")); // take desired length and padding chars
// → 006

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3));
// → LALALA

let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b
```