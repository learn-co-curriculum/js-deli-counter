'use strict';

describe('nowServing', function() {

  var nowServing;
  var katzDeli;
  var otherDeli;

  beforeEach(function() {
    nowServing = require('../lib/nowServing');
    katzDeli = [];
    otherDeli = ["Steven", "Blake", "Avi"];
  });

  it('says the line is empty when no on is on line', function() {
    spyOn(console, 'log');

    nowServing(katzDeli);
    expect(console.log).toHaveBeenCalledWith("There is nobody waiting to be served!");
  });

  it('Announces the person it is serving, and reduces the line', function(){
    spyOn(console, 'log');

    nowServing(otherDeli);
    expect(console.log).toHaveBeenCalledWith("Currently serving Steven.");
    expect(otherDeli).toEqual(["Blake", "Avi"]);
  });
});
