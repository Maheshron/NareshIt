// create a angular Module
var app = angular.module('GreetingApp',[]);
// create a controller
app.controller('GreetAppCtrl',function ($scope) {
 $scope.time = ' ';
 $scope.greeting = ' ';
 $scope.greetMsg = function () {
     if($scope.time<=12){
         $scope.greeting = " Good Morning ";
     }
     else if($scope.time >12 && time<=17){
         $scope.greeting = "Good Afternoon";
     }
     else if($scope.time>17 && time <=24){
         $scope.greeting = 'Good Evening'
     }
     else if($scope.time>24){
         $scope.greeting = 'Enter Proper Time';
     }
     else{
         $scope.greeting = ' ';
     }
 };

});
