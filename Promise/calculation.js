var calculationPromise = new Promise(function(resolve, reject) {
  setTimeout(function(){
	resolve(1+1);
}, 1000);
});


var calculationPromise2 = new Promise(function(resolve, reject) {
  setTimeout(function(){
	resolve(1+2);
}, 500); // shorter time out
});

function addTwo(value) {
  return value+2;
}

function printFinalValue(finalValue) {
  console.log("The final value: ", finalValue);
}

calculationPromise
  .then(addTwo)
  .then(addTwo)
  .then(printFinalValue);

calculationPromise2
  .then(addTwo)
  .then(addTwo)
  .then(printFinalValue);


// const wait = data => function((resolve, reject) => setTimeout(callback, 1000));
