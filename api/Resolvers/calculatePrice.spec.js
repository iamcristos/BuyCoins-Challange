const { calculatePrice } = require("./calculatePrice.resolver").Query;

describe("calculatePrice resolver", () => {
  const currentBtcPrice = { currentBtcPrice: () => ({ rate_float: 1000.0 }) };

  it("should calculate selling price", async done => {
    const input = { input: { type: "sell", margin: 0.2, exchangeRate: 360 } };
    const result = await calculatePrice("", input, currentBtcPrice);
    expect(result.type).toBe("sell");
    expect(result.calculatePrice).toBe(288000);
    done();
  });

  it("should calculate buying price", async done => {
    const input = { input: { type: "buy", margin: 0.2, exchangeRate: 360 } };
    const result = await calculatePrice("", input, currentBtcPrice);
    expect(result.type).toBe("buy");
    expect(result.calculatePrice).toBe(432000);
    done();
  });
});
