var app = angular.module('GreetApp',[]);
app.controller('GreetAppCtrl',function ($scope) {
    $scope.time = '';
    $scope.greeting = ' ';
   $greetMsg = function () {
     if($scope.time === null){
         Sscope.greeting = ' ';
     }
     else{
         if($scope.time<=12){
             $scope.greeting = 'Good Morning';
         }
         else if()
     }
   };
});