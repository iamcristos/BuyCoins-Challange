const { mockServer } = require("graphql-tools");
const typeDef = require("./calculatePrice.schema");

describe("calculatePrice query", () => {
  const server = mockServer(typeDef);
  it("should resolve the query", async done => {
    const query = `
        {
            calculatePrice(input:{margin:0.2 type:buy exchangeRate: 363}){
                calculatePrice
              }
        }
      `;
    const { errors } = await server.query(query);
    expect(errors).not.toBeTruthy();
    done();
  });

  it("should return error if type is neither buyer or seller", async done => {
    const query = `
        {
            calculatePrice(input:{margin:0.1 type:nothing exchangeRate: 306}){
                type
                calculatePrice
              }
        }
      `;
    const { errors } = await server.query(query);
    expect(errors).toBeTruthy();
    expect(errors[0].message).toBe("Expected type AllowedType, found nothing.");
    done();
  });
});
