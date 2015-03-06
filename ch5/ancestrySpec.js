'use strict';
describe('86_forEach', function () {
  it('expect(logEach([1, 3, 5, 7])).toEqual("1357");', function () {
    expect(logEach([1, 3, 5, 7])).toEqual("1357");
  });
  it('expect(logger(5)).toEqual(5);', function () {
    expect(logger(5)).toEqual(5);
  });
  it('expect(forEach([2, 4, 6, 8], logger)).toEqual("2468");', function () {
    expect(forEach([2, 4, 6, 8], logger)).toEqual("2468");
  });
  it('expect(greaterThen10(11)).toBeTruthy()', function () {
    var greaterThan10 = greaterThan(10);
    expect(greaterThan10(11)).toBeTruthy();
  });
  it('expect(greaterThen10(5)).toBeFalsy()', function () {
    var greaterThan10 = greaterThan(10);
    expect(greaterThan10(5)).toBeFalsy();
  });

  describe('repeat', function () {
    var a = [1, 2, 3, 4];

    it('expect(isEven(2)).toBeTruthy();', function () {
      expect(isEven(2)).toBeTruthy();
    });
    it('expect(isEven(3)).toBeFalsy();', function () {
      expect(isEven(3)).toBeFalsy();
    });
    it('logIt', function () {
      expect(logIt(2)).toEqual("2 is even.");
    });
    it('expect(body(5)).toEqual("")', function () {
      expect(body(5)).toEqual("");
    });
    it('expect(body(4)).toEqual("4 is even.\n")', function () {
      expect(body(4)).toEqual("4 is even.\n");
    });
    it('expect(repeat(a)).toEqual("2 is even.\n4 is even.\n");', function () {
      expect(repeat(a)).toEqual("2 is even.\n4 is even.\n");
    });
  });
});

describe('ancestry', function () {
  var persons = [];
  var p0, p1, p4, p7;
  beforeEach(function () {
    persons = ancestry;
    //persons = [
    //  {"name": "Carolus Haverbeke", "sex": "m", born: 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
    //  {"name": "Emma de Milliano", "sex": "f", born: 1920, "died": 2015, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}
    //];
    p0 = persons[0];
    p1 = persons[1];
    p4 = persons[4];
    p7 = persons[7];

  });
  describe('88_filterArray', function () {
    it('expect(isBornBetween(p0)).toBeFalsy();', function () {
      expect(isBornBetween(p0)).toBeFalsy();
    });
    it('should return true if person born between 1900 and 1925', function () {
      expect(isBornBetween(p4)).toBeTruthy();
    });
    it('should return 3, for nr of people born between 1900 and 1925', function () {
      var x = filterPersons(persons).length;
      console.log(persons);
      expect(x).toEqual(3);
    });
    it('expect(filterPersons(persons).name).toEqual("Emma de Milliano");', function () {
      expect(filterPersons(persons)[0].name).toBe("Philibert Haverbeke");
    });
  });
  describe('89_mapArray', function () {
    it('should return name of first person in persons', function () {
      expect(getName(p0)).toEqual("Carolus Haverbeke");
    });
    it('expect(isOverNinety(p0)).toBeFalsy();', function () {
      expect(isOverNinety(p0)).toBeFalsy();
    });
    it('expect(isOverNinety(p7)).toBeTruthy();', function () {
      expect(isOverNinety(p7)).toBeTruthy();
    });
    it("expect(newFormat(persons)[0]).toEqual('Carolus Haverbeke');", function () {
      expect(newFormat(persons)[0]).toEqual('Carolus Haverbeke');
    });
  });
  describe('90_reduceArray', function () {
    var array = [1, 2, 30, 4, 5];
    it('expect(summarize(3,5)).toEqual(8);', function () {
      expect(summarize(3, 5)).toEqual(8);
    });
    it('expect(highest(4,8)).toEqual(8);', function () {
      expect(highest(4, 8)).toEqual(8);
    });
    it('reduce and summarize array', function () {
      expect(reduce(array, summarize, 1000)).toEqual(1042);
    });
    it('reduce and get highest', function () {
      expect(reduce(array, highest)).toEqual(30);
    });
    it('should return oldest person', function () {
      expect(getOldestPerson(persons).name).toEqual("Pauwels van Haverbeke");
    });

  });
  describe('91_averageArray', function () {
    it('expect(age(p0)).toEqual(73);', function () {
      expect(age(p0)).toEqual(73);
    });
    it('expect(male(p0)).toBe(true);', function () {
      expect(male(p0)).toBe(true);
    });
    it('expect(male(p1)).toBe(false);', function () {
      expect(male(p1)).toBe(false);
    });
    it('expect(female(p0)).toBe(false);', function () {
      expect(female(p0)).toBe(false);
    });
    it('expect(female(p1)).toBe(true);', function () {
      expect(female(p1)).toBe(true);
    });
    it('expect(filterMale(persons, male)).toEqual(21);', function () {
      expect(filterMale(persons, male).length).toEqual(21);
    });
  });
  describe('92_associativeArray', function () {
    it('average mother when giving birth', function () {
      var byName = convertByName(persons);
      expect(byName['Carolus Haverbeke'].name).toEqual('Carolus Haverbeke');
    });
  });
});
