# blind-bind [![Build Status](https://travis-ci.org/jamestalmage/blind-bind.svg?branch=master)](https://travis-ci.org/jamestalmage/blind-bind)

> Bind arguments before you have the function


## Install

```
$ npm install --save blind-bind
```


## Usage

```js
var bind = require('blind-bind');

// bind some args - returns a callback
var bound = bind(3, 2);

// declare some functions
function add(a, b) {
  return a + b;
}

function subtr(a, b) {
  return a - b;
}

bound(add); // => 5;

bound(subtr); // => 1;

// really useful in array.map / array.forEach
[add, subtr].map(bound);  // => [5, 1]; 


// partial binding
var partial = bind(4);

// you can add args after the fact (first arg must be a function)
partial(add, 5); // => 9;
```

## License

MIT © [James Talmage](http://github.com/jamestalmage)
