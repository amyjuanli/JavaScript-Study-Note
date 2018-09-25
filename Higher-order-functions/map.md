## Write `map` function like the below to understand how it works internally
```javascript
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;

// console.log(map(arr, s => s.name));

}
```

## Usage Example of Array.prototype.map(function callback(currentValue[, index[, array]]) 
```javascript
var animals = [{
        name: 'A',
        species: 'rabbit'
    },
    {
        name: 'B',
        species: 'dog'
    },
    {
        name: 'C',
        species: 'cat'
    },
    {
        name: 'D',
        species: 'fish'
    },
    {
        name: 'E',
        species: 'horse'
    },
    {
        name: 'B2',
        species: 'dog'
    },
];
```

Unlike filter(), which throw away elements, map() transform array.
Goal: to get the names of all animals
Use for loop:
```javascript
var names = [];
for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}
```
Use map ():
```javascript
var names = animals.map(function(animal) {
    return animal.name;
});

console.log(names);
// -> ["A", "B", "C", "D", "E", "B2"]
```
Since map() is returning any object, so we can manipulate the returned output: 
```javascript
var names = animals.map(function(animal) {
    return animal.name + ' is a ' + animal.species;
});

console.log(names);
// -> ["A is a rabbit", "B is a dog", "C is a cat", "D is a fish", "E is a horse", "B2 is a dog"]
```
Write even shorter code using arrow function (ES6)  
```javascript
var names = animals.map((animal) => animal.name);
```
