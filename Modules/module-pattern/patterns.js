// (function () {
//   function foo() {
//       console.log('foobar');
//   };
//   foo();
// })();


// or add exclamation mark to treat function as an expression, then we can call it:

// !function () {
//   function foo() {
//       console.log('foobar');
//   };
//   foo();
// }();

//foobar
//true


// (function () {
//   function foo() {
//       console.log('foobar');
//   };
//   foo();
// }());


!function (underscore) {
  underscore.addnewmethod = 'andd new';
  console.log(underscore);
}(_);// import _ from underscore.js library and use it locally

console.log(_);


var note = {};
!function (underscore) {
  underscore.addnewmethod = 'andd new';
  console.log(underscore);
}(note);// import an defiend empty object





// var awesomeNewModule = (function() {
//   // var exports = {
//   //   foo: 5,
//   //   bar: 10,
//   // };
//   var exports = {};
//   exports.helloMars = function() {
//     console.log("hello Mars");
//   };
//   exports.helloMoon = function() {
//     console.log("hello Moon");
//   }
//   return exports;
// }());




var awesomeNewModule = (function(exports) {
  var exports = {
    foo: 5,
    bar: 10,
  };
  exports.helloMars = function() {
    console.log("hello Mars");
  };
  exports.helloMoon = function() {
    console.log("hello Moon");
  }
  return exports;
}(awesomeNewModule || {}));
