Get the current date and time using `Date` class:
```javascript
console.log(new Date());
// → Mon Nov 13 2017 16:19:11 GMT+0100 (CET)
```
You can also create a specific date and time: 
```javascript
console.log(new Date(2009, 11, 9));
// → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)
```
Timestamp:
```javascript
// get the milliseconds of current datetime: create a date object and call getTime() on it
console.log(new Date(2013, 11, 19).getTime());
// → 1387407600000

// a single argument is passed which is treated as milliseconds
console.log(new Date(1387407600000));
// → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)
```
Date objects provide methods such as `getFullYear`, `getMonth`, `getDate`, `getHours`, 
`getMinutes` to extract the component from the date object.  
An example illustrates how to create a date object from a string: 
```javascript
function getDate(string) {
  let [_, month, day, year] =
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
```
Note: `_` just skips the whole matched string which is not our interest. 