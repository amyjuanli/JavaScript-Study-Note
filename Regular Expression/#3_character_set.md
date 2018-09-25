# `[xyz]` - character set to match a single digit
`indexOf` enable us to find whether a string contains some pattern, but *regular
 expression* allows us to target more complicated pattern: 
```javascript
console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true
```
Special characters inside the `[]`: 
\d	Any digit character  
\w	An alphanumeric character (“word character”)  
\s	Any whitespace character (space, tab, newline, and similar)  
\D	A character that is not a digit  
\W	A nonalphanumeric character  
\S	A nonwhitespace character  
.	Any character except for newline 
\b  Backspace  
Which are used as shortcut to write a string pattern. 
```javascript
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false
```
Note: those backslashes can also be used inside the brackets: 
[\d.] means any digit or a period character. (. loses its special meaning in here).  
Same goes other special characters: +.
To invert a set of characters - `^` inside bracket
```javascript
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true
```
