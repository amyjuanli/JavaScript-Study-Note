function propertyRepresentation(o,v){
  this.variableName = v;
  this.type = typeof o[v];
  this.variableValue = o[v];
}

globalVariables = [];
counter = 0;
globalObject = this;
for (prop in globalObject) {
  globalVariables.push(new propertyRepresentation(globalObject,prop));
  counter++;
  if (counter >= 10){
     more = { more: "... on a total of "+Object.keys(globalObject).length }
     globalVariables.push(new propertyRepresentation(more,"more"));
     break;
  }
}

console.log("The first 10 variables of the global object:");
console.table(globalVariables);
