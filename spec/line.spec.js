'use strict';

describe('line', function() {

  var line;
  var katzDeli;
  var otherDeli;

  beforeEach(function() {
    line = require('../lib/line');
    katzDeli = [];
    otherDeli = ["Steven", "Blake", "Avi"];
  });

  it('says the line is empty if no one is in line', function() {
    spyOn(console, 'log');
    line(katzDeli);
    expect(console.log).toHaveBeenCalledWith("The line is currently empty.");
  });

  it('says who is on line when there are people waiting', function(){
    spyOn(console, 'log');
    line(otherDeli);
    expect(console.log).toHaveBeenCalledWith("The line is currently: 1. Steven, 2. Blake, 3. Avi");
  });
});
