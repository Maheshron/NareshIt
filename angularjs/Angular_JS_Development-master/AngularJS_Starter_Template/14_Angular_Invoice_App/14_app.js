// create a module
var app = angular.module('InvoiceApp',[]);
// create a controller
app.controller('InvoiceAppCtrl',function () {
    this.editmode = true;
    this.invoice = {
        tax : 13.0,
        customer_info :{
            name : 'S.Mahesh Kumar',
            company : 'Unleashed Mind Inc',
            address_1 :'house no b -101',
            address_2 :'Hitech City ',
            pincode : 500042
        },
        company_info :{
            name : ' Unleashed Mind Inc',
            company : 'Unleashed Mind inc',
            address_1 :'plot no:141,Road No:12',
            address_2 :'plot no:141,Road No:12',
            pincode : 500001
         },
        items:[
            {
                description :'',qty:null,cost:null
            }
        ]

    };
    this.addItem = function () {
        this.invoice.items.push({description :'',qty:null,cost:null})
    };
    this.deleteItem = function (index) {
        this.invoice.items.splice(index,1);
    }
    this.subtotal = function () {
      var total = 0.00;
      angular.forEach(this.invoice.items,function (item) {
          total += (item.qty * item.cost);
      });
        return total;
    };
    this.servicetax = function () {
      return this.subtotal()  * (this.invoice.tax/100);
    };
    this.grandTotal  = function () {
      return this.subtotal() + this.servicetax();
    };
    this.onEditMode = function () {
      this.editmode = true;
    };
    this.OffEditMode = function () {
      this.editmode = true;
    };
    this.printDoc = function () {
      window.print()
    };

});
