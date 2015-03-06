/**
 * Created by maarten on 26/02/15.
 */
   'use strict';
describe('multiplier', function () {

  var times5 = multiplier(5);

  it('times5(5) === 25 ', function () {
    expect(times5(5)).toBe(25);
  });
});