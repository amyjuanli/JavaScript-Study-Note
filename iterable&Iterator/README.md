# ITERABLE AND ITERATOR

## What is `iterable`, `iterator`

The concept of _iterable_ objects allows to 'iterable' through a `for .. of` loop.  
When `Symbol.iterator` method is called on an object, it provides a second  
interface, `iterator`.

Many built-in objects in JavaScript are iterable such as object, array, and even  
string. For these built-in iterable objects, we can directly call  
`Symbol.iterator` on the object to generate an _iterator_.

According to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">_The iterable protocol_</a>:

- "In order to be **iterable**, an object must implement the  
  **@@iterator** method, meaning the object must have a property with a **@@iterator**  
  key which is available via constant `Symbol.iterator`."
- An **iterator** is any object having a `next()` method which returns an object  
  with two properties - `{value, done}`.

## Two types iterators
### Synchronous Iterators
### Asynchronous Iterators (ES2018)

## Reasons for introducing _iterators_ in JavaScript

_Iterators_ are essential for efficient data processing.  
Along with other programming language, ES6 introduces _iterators_ to JavaScript.  
`for-of` loop and spread operator `(...)` uses _iterators_, and  
even asynchronous programming can use it.

#### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
* http://exploringjs.com/es6/ch_iteration.html#sec_implementing-iterables 
* https://dev.to/nestedsoftware/the-iterators-are-coming-symboliterator-and-symbolasynciterator-in-javascript-hj