const StrongMap = require('./index'); // eslint-disable-line unicorn/import-index

test('StrongMap is a Map', () => {
  expect(StrongMap.prototype instanceof Map).toBe(true);
});

test('Get a key if is a number works as a usual Map', () => {
  const strongMap = new StrongMap([['a', 1], ['b', 2]]);
  expect(strongMap.get('a')).toBe(1);
  expect(strongMap.get('b')).toBe(2);
  expect(strongMap.get('c')).toBe(undefined);
});

test('Get a key that is an object not referenced and work as referenced', () => {
  const strongMap = new StrongMap([[{ a: 'hello' }, 1], [{ a: 'goodbye' }, 2]]);
  expect(strongMap.get({ a: 'hello' })).toBe(1);
  expect(strongMap.get({ a: 'goodbye' })).toBe(2);
  expect(strongMap.get({ a: 'test' })).toBe(undefined);
});
