## Converting mistakes into errors -- helpful for JS debugging process

**First, _strict mode_ prevents us accidentally create new global variables.**
Under _non-strict mode_, misspelling variable name can create a new property on window object. However,
such assignment `=`, under _strict mode_, would instead throw an error.

```javascript
"use strict";
// Assuming a global variable mistypedVariable exists
mistypeVariable = 17; // this line throws a ReferenceError due to the
// misspelling of variable
```

**Second, _strict mode_ makes assignments which would otherwise **silently fail** to throw an exception.**

```javascript
"use strict";

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = {
  get x() {
    return 17;
  }
};
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // throws a TypeError
```

**Third, _strict mode_ makes attempts to delete undeletable properties throw an exception.**

```javascript
"use strict";
delete Object.prototype; // throws a TypeError
```

**Fourth, _strict mode_ requires the property names in object literal to be unique.**

```javascript
"use strict";
var o = { p: 1, p: 2 }; // !!! syntax error
```

**Fifth, _strict mode_ requires the parameter names to unique.**

```javascript
function sum(a, a, c) { // !!! syntax error
  'use strict';
  return a + a + c; // wrong if this code ran
}
```

**Sixth, _strict mode_ in ES5 forbids octal syntax**

```javascript
 'use strict';
var sum = 015 + // !!! syntax error
          197 +
          142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```
**Seventy, **strict mode** forbids setting properties on primitive values**
```javascript
 (function() {
'use strict';

false.true = '';         // TypeError
(14).sailing = 'home';   // TypeError
'with'.you = 'far away'; // TypeError

})();
```