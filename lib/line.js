'use strict';

var line = function(deli){
    if(deli.length === 0){
      var response = "The line is currently empty.";
      console.log(response);
      return response;
    }else{
      var queue = [];
      deli.forEach(function(person, index){
        queue.push((index + 1).toString() + ". " + person);
      });
      var response = "The line is currently: " + queue.join(", ")
      console.log(response);
      return response;
    }
};
