const { gql } = require("apollo-server-express");

const calculatePriceSchema = gql`
  enum AllowedType {
    sell
    buy
  }

  input CalculatePriceInput {
    margin: Float!
    exchangeRate: Float!
    type: AllowedType!
  }

  type CalculatePrice {
    margin: Float
    exchangeRate: Float
    type: AllowedType
    calculatePrice: String
  }

  type Query {
    calculatePrice(input: CalculatePriceInput): CalculatePrice!
  }
`;

module.exports = calculatePriceSchema;
