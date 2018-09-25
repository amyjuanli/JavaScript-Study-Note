## FUNCTIONS AS VALUES
```javascript
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
```
Interesting things can be done by passing around functions values to other functions. Higher-Order Functions is a good example. 

## DECLARATION NOTATION
```javascript
function square(x) {
    return x * x;
} // semicolon is not required
```
Note: *function declarations* are not part of the regular top-to-bottom flow of control as they are conceptually hoisted to the top of their scope and can be used by all the program in that scope. eg:
 ```javascript
 console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```

## ARROW FUNCTIONS
```javascript
// case 1
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

// case 2
const square1 = (x) => { return x * x; };

// case 3
const square2 = x => x * x;

// case 4
const horn = () => {
  console.log("Toot");
};

```