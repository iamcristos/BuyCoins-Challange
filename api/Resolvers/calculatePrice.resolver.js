/* eslint-disable camelcase */
const calculatePrice = async (_, { input }, { currentBtcPrice }) => {
  const { rate_float } = await currentBtcPrice();
  const { margin, type, exchangeRate } = input;
  let amount = null;
  const rateDiff = margin * rate_float;
  if (type === "sell") {
    amount = rate_float - rateDiff;
  } else {
    amount = rate_float + rateDiff;
  }
  return {
    margin,
    exchangeRate,
    calculatePrice: amount * exchangeRate,
    type
  };
};

module.exports = {
  Query: {
    calculatePrice
  }
};