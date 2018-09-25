Given an object SCRIPTS (see SCRIPTS.js)

How to find the script with the most characters
```javascript
// Module 1: reduces the ranges assigned to a script by summing their size
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    //  [from, to] is the destruction of the parameter list
    return count + (to - from);
  }, 0);
}

// Module 2: repeatedly comparing two scripts and returning the larger one
console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}
```

