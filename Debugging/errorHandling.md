## Return a special value
```javascript
// example 1:
function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}
console.log(promptNumber("How many trees do you see?"));

// example 2:
function lastElement(array) {
  if (array.length == 0) {
    return null;
  } else {
    return {element: array[array.length - 1]};
  }
}

// example 3: 
function lastElement(array) {
  if (array.length == 0) {
    return {failed: true};
  } else {
    return {element: array[array.length - 1]};
  }
}
```
**We can do better by implementing *exception**
## Exceptions
Exception handling - when a program cannot proceed, it should stop and jump to 
the place that knows how to handle the problem.
```javascript
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result); // Error constructor 
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
```
In above case, we use `Error` constructor to create the error message. It expects 
string message argument; It is a standard JS constructor returning an object with 
a `message` property.  
*Error-handling code* is only necessary where the error occurs and at which point
 it is handled, which is an advantage of exceptions.
### Exceptions in the control of workflow
```javascript
const accounts = {
  a: 100,
  b: 0,
  c: 20
};

function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}

// transfer -v1
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  accounts[from] -= amount;
  accounts[getAccount()] += amount;
}

// transfer -v2 (correct v1)
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}
```
### Selectively catching the 'right' error
This example shows a wrong catching error (the real error is the typo problem)
```javascript
for (;;) {
  try {
    let dir = promtDirection("Where?"); // ← typo!
    console.log("You chose ", dir);
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again.");
  }
}
```
Instead, we define a new type of error and use `instanceof` to identify it: 
```javascript
class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

for (;;) {
  try {
    let dir = prompDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}
// -> ReferenceError: prompDirection is not defined
```
## Assertion
Coming back the beginning code example (return special value), now instead of 
silently return *undefined*, error is thrown when expecting an empty array, which
 immediately stop the program.
```javascript
function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];
}
```
Such way makes it less likely for such mistakes to go unnoticed but easier for 
us to find where the problem is. 