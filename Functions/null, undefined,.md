
```javascript
console.log(fn);
// -> ReferenceError: fn is not defined
```
```javascript
console.log(fn);
var fn = 2;
// -> undefined
```
```javascript
fn();
var fn = function (){ alert("test"); }
//-> TypeError: fn is not a function
```
```javascript
console.log(fn);
var fn = function (){ alert("test"); }
// -> undefined
```

