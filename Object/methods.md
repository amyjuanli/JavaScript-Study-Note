A simple method: 
```javascript
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'
```
In some cases, you implicitly passing `this`: 
```javascript
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

// object.method() 
// 'this' automatically point to the object the method is called on
whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'
```
Or you can explicitly pass `this` using `function.apply` (the first parameter  
 refers to the object, the rest refer to a list of arguments if more than one)
```javascript
speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'
```
