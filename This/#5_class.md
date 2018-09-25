## This in classent

When using _this_ inside the method of ES6 class, it points to current object automatically, which is nice.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hi! My name is" + this.name);
  }
}

var john = new Person("John Doe");
john.greet(); // Hi! My name is John Doe
```

However, when using nested functions inside such methods, those functions behave  
as regular functions (have their own `this` binding). To be noticed, the code  
inside the class is automatically executed in _strict mode_ (`use strict`) even  
not explicitly declared. _strict mode_ changes behavior inside functions, so `this`  
is `undefined` instead of pointing to the global object.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return function() {
      console.log(this);
    };
  }
}

var john = new Person("John Doe");
console.log(john.greet()());
// → undefined
```

Arrow function vs usual function in class:

```javascript
class A {
  static color = "red";
  counter = 0;

  handleClick = () => {
    this.counter++;
  };

  handleLongClick() {
    this.counter++;
  }
}
```

Transpile to ES2017:

```javascript
class A {
  constructor() {
    this.counter = 0;

    this.handleClick = () => {
      this.counter++;
    };
  }

  handleLongClick() {
    this.counter++;
  }
}
A.color = "red";
```

As you can see, instance property and arrow function moved to _constructor_  
except the usual function.
