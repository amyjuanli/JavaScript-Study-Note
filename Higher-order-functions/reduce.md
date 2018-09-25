## Write `reduce` function like the below to understand how it works internally
```javascript
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
```

## Usage Example of Array.prototype.reduce(callback[, initialValue])
### Basic case
```javascript
var orders = [
    { amount: 100 },
    { amount: 200 },
    { amount: 300 },
    { amount: 340 }
];
```
Use for loop: 
```javascript
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}
```
Use reduce ():
```javascript
var totalAmount = orders.reduce(function(sum, order) {
    console.log("hello", sum, order);
    return sum + order.amount;
}, 0)
console.log(totalAmount);
// hello 0 { amount: 100 }
// hello 100 { amount: 200 }
// hello 300 { amount: 300 }
// hello 600 { amount: 340 }
// 940
```
Shorter code  
```javascript
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
```

### Advanced case
`reduce` not just reduce a list to a number (above example), but also object, another list, etc..  
We can chain `map`, `filter`, and `reduce` to solve a complicated problem. (chain.md)
