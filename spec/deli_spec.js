'use strict';

describe('line', function() {

  var katzDeli;
  var otherDeli;

  beforeEach(function() {
    katzDeli = [];
    otherDeli = ["Steven", "Blake", "Avi"];
  });

  it('says the line is empty if no one is in line', function() {
    expect(line(katzDeli)).toEqual("The line is currently empty.");
  });

  it('says who is on line when there are people waiting', function(){
    expect(line(otherDeli)).toEqual("The line is currently: 1. Steven, 2. Blake, 3. Avi");
  });
});

describe('nowServing', function() {

  var katzDeli;
  var otherDeli;

  beforeEach(function() {
    katzDeli = [];
    otherDeli = ["Steven", "Blake", "Avi"];
  });

  it('says the line is empty when no on is on line', function() {
    expect(nowServing(katzDeli)).toEqual("There is nobody waiting to be served!");
  });

  it('Announces the person it is serving, and reduces the line', function(){

    expect(nowServing(otherDeli)).toEqual("Currently serving Steven.");
    expect(otherDeli).toEqual(["Blake", "Avi"]);
  });
});

describe('takeANumber', function() {

  var katzDeli;
  var otherDeli;

  beforeEach(function() {
    katzDeli = [];
    otherDeli = ["Steven", "Blake", "Avi"];
  });

  it('adds a person to the line', function() {
    // spyOn(console, 'log');
    expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
    // expect(console.log).toHaveBeenCalledWith("Welcome, Ada. You are number 1 in line.");
    expect(katzDeli).toEqual(['Ada']);
  });

  it('appends the person the end of the line if there are already people on it', function(){
    // spyOn(console, 'log');
    expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
    // expect(console.log).toHaveBeenCalledWith("Welcome, Grace. You are number 4 in line.");
    expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
  });

  it("properly handles multiple people being added", function(){
    takeANumber(katzDeli, 'Ada');
    takeANumber(katzDeli, 'Grace');
    takeANumber(katzDeli, 'Kent');

    expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
  });
});

