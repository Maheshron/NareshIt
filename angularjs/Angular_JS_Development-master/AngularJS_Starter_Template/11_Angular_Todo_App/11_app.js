// create a module
var app = angular.module('GroceryApp',[]);
// Create a Controller
app.controller('GroceryAppCtrl',function () {
    this.item = ' ';
    this.groceryList = [];
    this.editMode = false;
    this.additem = function (item) {
        if(item === ''){
            alert('Dude enter alest on item')
        }
        else{
       if(this.groceryList.indexOf(item === 1 )) {
           this.groceryList.push(item);
           this.item = ' ';
       }
       else{
           alert('Dude '+ item + ' exits already')
       }
        }
    };
    this.enableEditMode = function() {
        this.editMode = true;
    };
    this.disableEditMode = function () {
        this.editMode = false;
    };
    this.deleteItem = function (index) {
      this.groceryList.splice(index,1);
    };
    this.replaceItem = function (index,item) {
        this.groceryList.splice
    }

});