// test.js

const {
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound
} = require('./app.js');

describe("Currency Converter Tests", () => {

  test("Convert 1 Euro to Dollars", () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
  });

  test("Convert 1 Dollar to Yen", () => {
    // 1 USD = (1 / 1.07) EUR ≈ 0.93458 EUR
    // 0.93458 EUR * 156.5 JPY/EUR ≈ 146.261 JPY
    const result = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(result).toBeCloseTo(expected, 2);  
  });

  test("Convert 1 Yen to Pounds", () => {
    // 1 JPY = (1 / 156.5) EUR ≈ 0.0063898 EUR
    // 0.0063898 EUR * 0.87 GBP/EUR ≈ 0.005559 GBP
    const result = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(result).toBeCloseTo(expected, 5);  
  });

});