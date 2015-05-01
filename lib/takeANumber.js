'use strict';

var takeANumber = function(deli, person){
  var nextPosition = deli.length + 1;
  console.log("Welcome, " + person + ". You are number " + nextPosition + " in line.");
  deli.push(person);
};