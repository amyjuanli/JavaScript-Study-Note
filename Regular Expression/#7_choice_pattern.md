# CHOICE PATTERN - `|` the pipe character
```javascript
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pigchickens"));
// → false
```
The parenthesis in the above code, `(pig|cow|chicken)`, is used to limit the part of pattern the pipe operator applies to. 