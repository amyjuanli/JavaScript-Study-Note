```javascript
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    var nextIndex = start;
    var n = 0;
    var returned = false;

    var rangeIterator = {
       next: function() {
           var result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               n += 1;
           } else if (!returned) {
               result = { value: n, done: true }
               returned = true;
           } else /* final value already returned */ {
               result = { done: true }
           }
           return result;
       }
    };
    return rangeIterator;
}


var it = makeRangeIterator(1,10, 2);
it
// → {next: ƒ}
// next() works fine
it.next()
// → {value: 1, done: false}
it.next() 
// → {value: 3, done: false}
it.next() 
// → {value: 5, done: false}
it.next() 
// → {value: 7, done: false}
it.next() 
// → {value: 9, done: false}
it.next() 
// → {value: 5, done: true}

// but not works for `for .. of` loop since it is not **iterable**
for (let v of it) { console.log(v);}
// VM6412:1 Uncaught TypeError: it is not iterable
```