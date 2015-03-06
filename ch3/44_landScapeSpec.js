'use strict';
describe('landscape', function () {
  it('flat(2) === "___"', function () {
    expect(flat(2)).toEqual('__');
  });
  it('mountain(3) === "/^^^\\"', function () {
    expect(mountain(3)).toEqual('/^^^\\');
  });
});