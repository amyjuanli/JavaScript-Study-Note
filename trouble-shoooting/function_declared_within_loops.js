
function destroyer(arr) {
  // Remove all the values
  arr = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    l = arguments[i];
    arr = arr.filter(function(val) {
      return val != l;
  });

  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
Functions declared within loops referencing an outer scoped variable may
lead to confusing semantics
*/
