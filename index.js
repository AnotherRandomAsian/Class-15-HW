const stockPrices = [
    {
      symbol: 'AAPL',
      price: 182,
      title: 'Apple Inc.',
    },
    {
      symbol: 'GOOG',
      price: 192,
      title: 'Alphabet Inc.',
    },
    {
      symbol: 'FB',
      price: 212,
      title: 'Facebook Inc.',
    },
    {
      symbol: 'AMZN',
      price: 312,
      title: 'Amazon.com Inc.',
    },
  ];

const getTotalValue = (stocks) => {
    return stocks.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);
}

const getAveragePrice = (stocks) => {
    return stocks.reduce((acc, curr) => {
        return getTotalValue(stocks) / stocks.length;
    })
}

const getMostExpensiveStock = (stocks) => {
    let mostExpensive = stocks[0];

    for (let i = 1; i < stocks.length; i++) {
      if (stocks[i].price > mostExpensive.price) {
        mostExpensive = stocks[i];
      }
    }
}

const getCheapestStock = (stocks) => {
    let cheapest = stocks[0];

    for (let i = 1; i < stocks.length; i++) {
      if (stocks[i].price < cheapest.price) {
        cheapest = stocks[i];
      }
    }
}

const getNumberOfStocks = (stocks) => {
    return stocks.length();
}

const filterStocksAbovePrice = (stocks) => {
    stocks.filter((price) => {
        return price > threshold
    })
}

const sortByAscendingPrice = (stocks) => {
  stocks.sort((a, b) => a - b)
}

organized = sortByAscendingPrice(stockPrices)

module.exports = {
    stockPrices,
    getTotalValue,
    getAveragePrice,
    getMostExpensiveStock,
    getCheapestStock,
    getNumberOfStocks,
    filterStocksAbovePrice
}