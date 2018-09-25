## Q: How do we get the character codes in a string?

```javascript
// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0)); // gives full Unicode character
// → 128052 (Actual code for horse emoji)
```
Explanation: JavaScript’s charCodeAt method gives you a code unit, not a full  
character code.  
If you have a character (which will be a string of one or two code units),  
 you can use codePointAt(0) to get its code. (see the above example)

Also looping over a string gives real characters, not code units: 
```javascript
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
// → 🌹
// → 🐉
```
