describe('78a_sumOfRange', function () {
  it('expect(createRange(10,50, 10)).toEqual([10,20,30,40,50])', function () {
    expect(createRange(10, 50, 10)).toEqual([10, 20, 30, 40, 50]);
  });
  it('expect(createRange(50,10,10)).toEqual([50,40,30,20,10])', function() {
    expect(createRange(50,10,10)).toEqual([50,40,30,20,10]) ;
  }) ;

  it('expect(sum([10,20,30])).toEqual(60)', function () {
    expect(sum([10, 20, 30])).toEqual(60);
  });
});