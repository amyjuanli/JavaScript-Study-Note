```javascript
class SimpleIterable {
    next() {
        return { value: 3, done: true }
    }
}  

const iter = new SimpleIterable()
for (const value of iter) {
    console.log('value = ' + value)
}
// → for (const value of iter) {
// → TypeError: iter is not iterable
```
It seems that `next()` is not always good enough for `for...of`, for example.  
Fix this by adding `Symbol.iterator` to create an `iterable` interface:  
```javascript
class SimpleIterable {
    next() {
        return { value: 3, done: true }
    }

    [Symbol.iterator]() {
        return {
            next: () => this.next()
        }
    }
}

const iter = new SimpleIterable()
for (const value of iter) {
    console.log('value = ' + value)
}
// → undefined 
```
Since we set `done` to `true`, so there is no output. We can fix this: 

```javascript
class SimpleIterable {
    constructor() {
        this.index = 0;
        this.values = [3,1,4];
    }

    next() {
        const value = this.values[this.index];
        const done = !(this.index in this.values);
        this.index++;
        return { value, done };
    }

    [Symbol.iterator]() {
        return {
            next: () => this.next()
        };
    }   
}

const iter = new SimpleIterable()
for (const value of iter) {
    console.log('value = ' + value);
}
// → value = 3
// → value = 1
// → value = 4
```