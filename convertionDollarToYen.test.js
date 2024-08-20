const convertionDOllarToYen = require('./convertionDollarToYen');
test('change  1 Dollar to Yen', () => {
  expect(convertionDOllarToYen(1)).toBe(147.31);
});

test('change  0 Dollar to Yen', () => {
    expect(convertionDOllarToYen(0)).toBe(0);
});

const convertionEuroToDollar = require('./convertionEuroToDollar');
test('change  1 Euro to Dollar', () => {
  expect(convertionEuroToDollar(1)).toBe(1.10);
});

test('change  0 Euro to Dollar', () => {
  expect(convertionEuroToDollar(0)).toBe(0);
});

const convertionYenToPound = require('./convertionYenToPound');
test('change  1 Yen to Pound', () => {
  expect(convertionYenToPound(1)).toBe(0.0052);
});
test('change  0 Yen to Pound', () => {
  expect(convertionYenToPound(0)).toBe(0);
});