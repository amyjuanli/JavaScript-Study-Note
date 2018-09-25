Using *strict mode* may hurts, but it does help you debug your code. 
An example: 
```javascript
// no error showing up
function canYouSpotTheProblem() {
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}
console.log(counter);
canYouSpotTheProblem();
// → 10  -> indicates that the JS quietly creates a global binding: counter
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy

// 'strict mode' make the error show up
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined

// Notice though, computer won't complain if there is already global binding for counter: 
let counter;
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
// Happy happy
```

Another example to illustrate its usage for *constructor*: 
```javascript
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // oops
console.log(ferdinand);
// → Ferdinand
console.log(name);
// → undefined
```
Output Explanation:  
Calling `Person` succeeds, which provides the returned value as `undefined` and a global binding `name`.  
Calling a constructor function like `Person` without `new` keyword will make `this` refers to  
`undefined` since it doesn't refers to the newly created construct object.
Using *strict mode*: 
```javascript
"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // forgot new
// → TypeError: Cannot set property 'name' of undefined
```
which immediately tells us where is the problem.
/
*Strict mode* allows many more things. Please refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">documentations in MDN</a> and <a href="../Strict Mode/README.md">current repository</a>.