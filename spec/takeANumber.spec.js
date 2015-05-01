'use strict';

describe('takeANumber', function() {

  var katzDeli;
  var otherDeli;

  beforeEach(function() {
    katzDeli = [];
    otherDeli = ["Steven", "Blake", "Avi"];
  });

  it('adds a person to the line', function() {
    spyOn(console, 'log');
    takeANumber(katzDeli, 'Ada');
    expect(console.log).toHaveBeenCalledWith("Welcome, Ada. You are number 1 in line.");
    expect(katzDeli).toEqual(['Ada']);
  });

  it('appends the person the end of the line if there are already people on it', function(){
    spyOn(console, 'log');
    takeANumber(otherDeli, 'Grace');
    expect(console.log).toHaveBeenCalledWith("Welcome, Grace. You are number 4 in line.");
    expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
  });

  it("properly handles multiple people being added", function(){
    takeANumber(katzDeli, 'Ada');
    takeANumber(katzDeli, 'Grace');
    takeANumber(katzDeli, 'Kent');

    expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
  });
});
