Sydney.events=function(){return{trigger:function(a,b,c){$(document).trigger("sydney-"+a+"-"+b,c)},on:function(a,b,c){$(document).on("sydney-"+a+"-"+b,c)},off:function(a,b,c){_.isUndefined(c)?$(document).off("sydney-"+a+"-"+b):$(document).off("sydney-"+a+"-"+b,c)}}}();