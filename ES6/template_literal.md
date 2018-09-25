#Create Strings using Template Literals  
A new feature of ES6 is the *template literal*. This is a special type of string  
that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string  
interpolation features to create strings.  

Consider the code below:
```javascript
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
```
Two things to be noticed: 
  * Uses backticks (`), not quotes (' or "), to wrap the string.
  * Multi-line


