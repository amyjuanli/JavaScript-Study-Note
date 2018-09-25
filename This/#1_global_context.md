In the global execution context (outside any function), `this` refers to the global object whether in _strict mode or not_.  

```javascript
// In web browsers, the window object is also the global object:
this;
// → Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
this === window;
// → true
x = 10;
window.x;
// → 10
y = "hello";
window.y;
// → "hello"
this.z = "MDN";
window.z;
// → "MDN"
z;
// → "MDN"
```
