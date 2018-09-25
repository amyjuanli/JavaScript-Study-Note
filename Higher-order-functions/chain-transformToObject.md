# Chain Map, Filter, and Reduce

## Case 1:   transform txt into an object 
Problem: turn data.txt into:
```javascript
{
    'Sarah Smith': [
        { name: 'waffle iron', price: '70', quantity: '1' },
        { name: 'blender', price: '200', quantity: '1' },
        { name: 'knife', price: '20', quantity: '3' }
    ],
    'Nick Wrong': [
         { name: 'waffle iron', price: '70', quantity: '2' },
         { name: 'blender', price: '200', quantity: '3' },
         { name: 'knife', price: '20', quantity: '8' },
         { name: 'spoon', price: '10', quantity: '8' },
    ]
}
```

Solution:
```javascript
// import fs from 'fs';
const fs = require("fs");
var output = fs
  .readFileSync("./dataset/data.txt", "utf8")
  .trim()
  .split("\n")
  .map(line => line.split("-"))
  .reduce((customers, line, index) => {
    // if (!customers[line[0]]) {
    //     customers[line[0]] = [];
    // }
    // or
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    });
    return customers;
  }, {});
console.log("output", JSON.stringify(output, null, 2));
//  -> {
//   "mark johansson": [
//     {
//       "name": "waffle iron",
//       "price": "80",
//       "quantity": "2"
//     },
//     {
//       "name": "blender",
//       "price": "200",
//       "quantity": "1"
//     },
//     {
//       "name": "knife",
//       "price": "10",
//       "quantity": "4"
//     }
//   ],
//   "Nikita Smith": [
//     {
//       "name": "waffle iron",
//       "price": "80",
//       "quantity": "1"
//     },
//     {
//       "name": "knife",
//       "price": "10",
//       "quantity": "2"
//     },
//     {
//       "name": "pot",
//       "price": "20",
//       "quantity": "3"
//     }
//   ]
// }
```

