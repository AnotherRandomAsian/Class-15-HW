const { describe, it } = require("node:test");
const { getMostExpensiveStock, getCheapestStock } = require(".");

describe('getTotalValue', () => {
  it('returns the total value of all the stocks', () => {
    expect(getTotalValue(stockPrices)).toBe(898);
  });
  it('returns the total value of 0 the stocks', () => {
    expect(getTotalValue([])).toBe(0);
  });
  it('returns the total value of 1 the stocks', () => {
    expect(getTotalValue({ price: 1 })).toBe(1);
  });
});

describe('getAveragePrice', () => {
  it('returns the average price of all the stocks', () => {
    expect(getAverageAge(stockPrices)).toBe(898);
  });
  it('returns the average price  of 0 the stocks', () => {
    expect(getAverageAge([])).toBe(0);
  });
  it('returns the average price  of 1 the stocks', () => {
    expect(getAverageAge({ price: 1 })).toBe(1);
  });
});

describe('getMostExpensiveStock', () => {
  it('returns the stock representing most expensive of all the stocks', () => {
    expect(getMostExpensiveStock(stockPrices)).toEqual({
      symbol: 'AMZN',
      price: 312,
      title: 'Amazon.com Inc.',
    });
  });
  it('returns the most expensice price of 0 the stocks', () => {
    expect(getMostExpensiveStock([])).toEqual(undefined);
  });
  it('returns the most expensive  of 1 the stocks', () => {
    expect(getMostExpensiveStock({ price: 1 })).toEqual({
      price: 1,
    });
  });
});

describe('getCheapestStock', () => {
  it('returns the stock representing most cheapest of all the stocks', () => {
    expect(getCheapestStock(stockPrices)).toEqual({
      symbol: 'AAPL',
      price: 182,
      title: 'Apple Inc. ',
    });
  });
  it('returns the most cheapest price of 0 the stocks', () => {
    expect(getCheapestStock([])).toEqual(undefined);
  });
  it('returns the most cheapest  of 1 the stocks', () => {
    expect(getCheapestStock({ price: 1 })).toEqual({
      price: 1,
    });
  });
});

describe('', () => {
  it('returns the amount of stocks', () => {
    expect(getCheapestStock(stockPrices)).toEqual(4);
  });
  it('returns the most cheapest price of 0 the stocks', () => {
    expect(getCheapestStock([])).toEqual(0);
  });
  it('returns the most cheapest  of 1 the stocks', () => {
    expect(getCheapestStock({ 
      symbol: 'AAPL',
      price: 182,
      title: 'Apple Inc. ',
     })).toEqual(1);
  });
});