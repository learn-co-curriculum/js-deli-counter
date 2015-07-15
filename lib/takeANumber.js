'use strict';

var takeANumber = function(deli, person){
  var nextPosition = deli.length + 1;
  var response = "Welcome, " + person + ". You are number " + nextPosition + " in line.";
  console.log(response);
  deli.push(person);
  return response;
};
