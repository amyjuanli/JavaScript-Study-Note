# GROWING FUNCTIONS

Code example:
```javascript
/* 
Write a program that prints the numbers of cows and chickens on a farm, with the
 words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.
*/
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString += "0";
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString += "0";
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 20);
// -> 700 Cows
// -> 200 Chickens
```
When function grows: print out additional pigs in this farm.  
*Attempt 1*
```javascript
function printZeroPaddedWithLabel(number, label) {
    let animalNumberString = String(number);
    while (animalNumberString.length < 3) {
        animalNumberString += "0";
    }
    console.log(`${animalNumberString} ${label}`);
}
function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "chickens");
    printZeroPaddedWithLabel(pigs, "pigs");
}

printFarmInventory(7, 20, 10);
// -> 700 Cows
// -> 200 chickens
// -> 100 pigs
```
The above code works, but we don't want the function `printZeroPaddedWithLabel`  
to be so 'heavy' since it conflate three things -- printing, zero-padding, and  
adding a label-- into a single function. 
*Attempt 2*
```javascript
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string += "0";
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} chickens`);
    console.log(`${zeroPad(pigs, 3)} pigs`);
}
printFarmInventory(7, 20, 10);
// -> 700 Cows
// -> 200 chickens
// -> 100 pigs
```
NOTE: Try not to be tempting to write general "frameworks" for every bit of functionality in your project.
