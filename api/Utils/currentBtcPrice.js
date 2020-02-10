const axios = require("axios");

const url = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";

const currentBtcPrice = async () => {
  try {
    const response = await axios.get(url);
    return response.data.bpi.USD;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { currentBtcPrice };
