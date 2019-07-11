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
