// Create a Module
var app = angular.module('InvoiceApp',[]);

// Create a Controller
app.controller('InvoiceAppCtrl',function () {
    this.editMode = true;
    this.invoice = {
        tax : 13.0,
        customer_info : {
            name : 'Mr. Naveen Saggam',
            company : 'Naveen Industries',
            address_1 : 'Plot No: 112',
            address_2 : 'Hitech City , Hyderabad',
            pincode : 500014
        },
        company_info : {
            name : 'UiBrains Techno Labs',
            company : 'UiBrains Industries',
            address_1 : 'Plot No: 1471 , Road No: 12',
            address_2 : 'Jubliee Hills , Hyderabad',
            pincode : 500001
        },
        items : [
            { description : '' , qty: null , cost: null}
        ]
    };
    this.addItem = function() {
        this.invoice.items.push({ description : '' , qty: null , cost: null});
    };
    this.deleteItem = function(index) {
        this.invoice.items.splice(index,1);
    };
    this.subTotal = function() {
      var total = 0.00;
      angular.forEach(this.invoice.items,function (item) {
          total += (item.qty * item.cost);
      });
      return total;
    };
    this.serviceTax = function() {
        return this.subTotal() * (this.invoice.tax / 100);
    };
    this.grandTotal = function() {
      return this.subTotal() + this.serviceTax();
    };
    this.onEditMode = function() {
      this.editMode = true;
    };
    this.offEditMode = function() {
      this.editMode = false;
    };
    this.printDoc = function() {
      window.print();
    };
});