'use strict';

var nowServing = function(deli){
  if(deli.length === 0){
    var response = "There is nobody waiting to be served!";
    console.log(response);
    return response;
  }else{
    var person = deli.shift();
    var response = "Currently serving "+ person +"."
    console.log(response);
    return response;
  }
};
