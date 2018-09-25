```javascript
/* export variables*/
"use strict";
export const foo = "bar";
export const bar = "foo";
export var color = 'red';
export let name = 'Juan';


/* export function*/
// way 1:
export function sum(num1, num2) {
    return num1 + num2;
}
// way 2:  define it first and export
function multiply(num1, num2) {
    return num1 * num2;
}
export multiply;
// way 3: 
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } 


/* export class*/
export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}


/* export into one line*/
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }
```