# Strong Map
[![Build Status](https://travis-ci.org/jorma16/strong-map.svg?branch=master)](https://travis-ci.org/jorma16/strong-map)
[![Coverage Status](https://coveralls.io/repos/github/jorma16/strong-map/badge.svg?branch=master)](https://coveralls.io/github/jorma16/strong-map?branch=master)

## About
This library is made to extend the functionality of Javascript's [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) to solve common problems.

## What more?
### Improved `get` function
If you usually use the Map objeasdct in your life and you have used objects like keys, sure that you are been frustrated with the `.get` method because you only can get a value if the key is **THE SAME** object, referenced. With this library this doesn't happen, for example:
```javascript
const StrongMap = require('../lib');

// With Vanilla Map
const map = new Map([
  ['Javascript', 'Good'],
  [{ lang: 'PHP' }, 'Bad']
]);

let js = map.get('Javascript');
let php = map.get({ lang: 'PHP' });
console.log(js); // Good
console.log(php); // undefined

// With StrongMap
const strongMap = new StrongMap([
  ['Javascript', 'Good'],
  [{ lang: 'PHP' }, 'Bad']
]);

js = strongMap.get('Javascript');
php = strongMap.get({ lang: 'PHP' });
console.log(js); // Good
console.log(php); // Bad
```

## Maintainers
- [jorma](https://github.com/jorma16)
