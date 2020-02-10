/* eslint-disable camelcase */
/**
 *
 *
 * @param {*} _
 * @param {*} { input }
 * @param {*} { currentBtcPrice }
 * @returns { margin, exchangeRate, type, calculatePrice}
 */
const calculatePrice = async (_, { input }, { currentBtcPrice }) => {
  const { rate_float } = await currentBtcPrice();
  const { margin, type, exchangeRate } = input;
  let amount = null;
  // calculates the margin difference
  const rateDiff = (margin / 100) * rate_float;
  if (type === "sell") {
    amount = rate_float - rateDiff;
  } else {
    amount = rate_float + rateDiff;
  }
  return {
    margin,
    exchangeRate,
    calculatePrice: (amount * exchangeRate).toFixed(3),
    type
  };
};

module.exports = {
  Query: {
    calculatePrice
  }
};
