// create An Angular Module
var app = angular.module('NestedApp',[]);
// create  a Parent Controller
app.controller('ParentCtrl',function ($scope) {
    $scope.text = ' ';
});
// create  a Parent Controller
app.controller('ChildCtrl',function ($scope) {
//  $scope.text = ' ';
});