// Create a module
var app = angular.module('NestedAsApp',[]);
// Create Parent Controller
app.controller('ParentAsCtrl',function () {
    this.text = ' ';
});

// Create Child Controller
app.controller('ChildAsCtrl',function () {
          this.text = ' ';

});