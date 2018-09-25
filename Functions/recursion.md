# RECURSION
```javascript
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8
```
### Problem with *recursion*
Running through a simple loop is generally cheaper than calling a function multiple times.  
The dilemma of elegant and efficient code.
But to be noticed, some problems are easier to solve with recursion than with loops. (scenario: the problem that requires exploring several "branches", each of which might branch out again into even more branches.)
```javascript
function findSolution(target) {
    function find(current, history) {
        if (current === target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                    find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));
// -> (((1 * 3) + 5) * 3)
console.log(findSolution(15));
// -> null
```