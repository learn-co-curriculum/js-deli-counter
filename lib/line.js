'use strict';

var line = function(deli){
    if(deli.length === 0){
      console.log("The line is currently empty.");
    }else{
      var queue = [];
      deli.forEach(function(person, index){
        queue.push((index + 1).toString() + ". " + person);
      });
      console.log("The line is currently: " + queue.join(", "));
    }
};

