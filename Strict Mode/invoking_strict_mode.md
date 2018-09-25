# Invoking *strict mode*
### Strict mode for scripts
```javascript
// Whole-script strict mode syntax
'use strict';
var v = "Hi! I'm a strict mode script!";
```
### Strict mode for functions
```javascript
function strict() {
  // Function-level strict mode syntax
  'use strict';
  function nested() { return 'And so am I!'; }
  return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }
```
### Strict mode for modules
```javascript
function strict() {
    // because this is a module, I'm strict by default
}
export default strict;
```