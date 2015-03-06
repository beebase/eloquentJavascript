'use strict';

describe("52_growingFunction", function () {
  it("printZeroPadded6(15,4) === '0015'", function () {
    expect(printZeroPadded6(15, 4)).toEqual("0015");
  });
  it("expect(printFarmInventory6(50, 60)).toEqual('00000050 Cows\n00000060 Chickens\n')", function () {
    expect(printFarmInventory6(50, 60)).toEqual('00000050 Cows\n00000060 Chickens\n');
  })
});