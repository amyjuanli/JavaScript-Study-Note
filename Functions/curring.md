Curring is the process of breaking down a function into a series of functions  
that each take a single argument. It works because of *closure*.
Rewrite the following code
```javascript
function sum(x, y, z) {
    return x + y + z;
}

console.log(sum(1,2,3))
// -> 6
```
into: 
```javascript
function sum(x) {
    return (y) => {
        return (z) => {
            return x + y + z;
        };
    };
}

console.log(sum(1,2,3))
// -> 6
```


Source link: 
* https://hackernoon.com/currying-in-js-d9ddc64f162e