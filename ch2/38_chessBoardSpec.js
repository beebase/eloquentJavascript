'use strict';
/*jshint -W117*/
describe('chessboard', function () {
  var result = createBoard(10);
  it('should be "^"', function () {
    expect(result.charAt(0)).toBe('^');
  });
  it('should be " "', function () {
    expect(result.charAt(11)).toBe(' ');
  });

  it('setChar(1,1) === "^"', function () {
    expect(setChar(1, 1)).toEqual('^');
  });
  it('setChar(0,1) === "^"', function () {
    expect(setChar(0, 1)).toEqual(' ');
  });
});
