module.exports = {
  Query: {
    calculatePrice: () => ({
      margin: 1.3,
      exchangeRate: 0.1,
      calculatePrice: 1,
      type: "sell"
    })
  }
};
