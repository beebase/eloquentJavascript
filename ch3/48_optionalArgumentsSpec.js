'use strict';

describe('power', function () {
  it('power(2) === 2', function () {
    expect(power(2)).toBe(4);
  });
  it('power(2,5) === 25', function () {
    expect(power(2, 5)).toBe(32);
  });
});