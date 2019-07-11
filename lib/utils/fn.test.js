const fn = require('./fn');

const { equals } = fn;

test('Number(1) !== Number(2)', () => {
  expect(equals(1, 2)).toBe(false);
});

test('String("Uno") !== Number(2)', () => {
  expect(equals('Uno', 2)).toBe(false);
});

test('Number(2) === Number(2)', () => {
  expect(equals(2, 2)).toBe(true);
});

test('String("Uno") === String("Uno")', () => {
  expect(equals('Uno', 'Uno')).toBe(true);
});

test('null === null', () => {
  expect(equals(null, null)).toBe(true);
});

test('String(1) !== Number(1)', () => {
  expect(equals(String(1), Number(1))).toBe(false);
});

test('If one parameter is not defined returns false', () => {
  expect(equals(1)).toBe(false);
});

test('{} === {}', () => {
  expect(equals({}, {})).toBe(true);
});

test('{ test: true } !== { test: false }', () => {
  expect(equals({ test: true }, { test: false })).toBe(false);
});

test('{ test: true, bad: false } !== { test: false }', () => {
  expect(equals({ test: true, bad: false }, { test: true })).toBe(false);
});

test('Date("2019-01-01") === Date("2019-01-01")', () => {
  expect(equals(new Date('2019-01-01'), new Date('2019-01-01'))).toBe(true);
});

test('Date("2019-02-01") === Date("2019-01-01")', () => {
  expect(equals(new Date('2019-02-01'), new Date('2019-01-01'))).toBe(false);
});
