
```javascript
let range = {
  start: 1,
  end: 10
};
// At this moment it doesn't work for the `for` loop
for (num of range) {
  console.log(num);
}
// → "error"
// → "TypeError: range is not iterable

("use strict");
let range = {
  from: 1,
  to: 5
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {
  // 2. ...it returns the iterator:
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// now it works!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
```
 `range[Symbol.iterator]()` creates an `iterator` object.