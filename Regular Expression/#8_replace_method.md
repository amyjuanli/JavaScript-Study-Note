```javascript
console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar
```

The real power of using _regular expression_ in _replace_ method is that we can refer the matched group in a replacement string.

```javascript
console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(
    /(\w+), (\w+)/g,
    "$2 $1"
  )
);
// → Barbara Liskov
//   John McCarthy
//   Philip Wadler

// `$&` refers to the whole match
console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(
    /(\w+), (\w+)/g,
    "$& $2 $1"
  )
);
// → Liskov, Barbara Barbara Liskov
// McCarthy, John John McCarthy
// Wadler, Philip Philip Wadler

// It's also possible to pass a function
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));
// → the CIA and FBI
```

A more interesting example:

```javascript
let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) {
    // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  console.log(match);
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → 1 lemon
// 2 cabbages
// 101 eggs
// no lemon, 1 cabbage, and 100 eggs
```
