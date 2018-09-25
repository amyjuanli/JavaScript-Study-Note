## Write `filter` function like the below to understand how it works internally
```javascript
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

// console.log(SCRIPTS.filter(s => s.direction == "ttb"));
// → [{name: "Mongolian", …}, …]
```

## Usage Example of Array.prototype.filter(callback(element[, index[, array]])[, thisArg])
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

Goal: to select the dog animals  
Use for loop: 
```javascript
var dogs = [];
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        dogs.push(animals[i]);
    }
}
```
Use filter(): 
```javascript
var dogs = animals.filter(function (animal) { // filter(callback)
    return animal.species === 'dog'
});
```
Now let's break the callback function as a separate variable: 
```javascript
var isDog = function(animal) {
    return animal.species === 'dog';
}
var dogs = animals.filter(isDog);
```

