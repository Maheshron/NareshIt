//create a module
var app = angular.module('GMApp',[]);

// create a Controller
app.controller('GMAppCtrl',function () {
   this.name = ' ';
   this.count = null;
   this.timesArray = [];
   this.addElements = function () {
         if(this.count !== null){
     for(var i=0;i<this.count;i++){
         this.timesArray[i] = i;
     }
         }
     else {
             this.timesArray = [ ];
         }
   };

});