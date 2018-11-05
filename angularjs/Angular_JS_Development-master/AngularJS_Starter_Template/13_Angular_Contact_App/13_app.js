//create a Module
var app = angular.module('ContactApp',[ ]);
// Create a Controller
app.controller('ContactAppCtrl',function ($scope,$http) {
     this.contactList = null;
     this.seledtedContact = null;
   $http.get('db.json').then(function(response) {
       this.contactList = response.data.contacts;

   });
   $scope.selectContact = function(index){
       $scope.selectedContact = $scope.contactList[index];
   };

});